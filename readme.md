# 🧠 Quiz App

A full-stack **MERN** quiz platform where users practice MCQ, theory and coding questions by topic, track their scores on a leaderboard, and admins manage the entire question bank from a dashboard.

**Solo project** — designed, built and deployed end to end by [Ishan Riyal](https://github.com/Ishan-Riyal).

|                    |                                                          |
| ------------------ | -------------------------------------------------------- |
| 🌐 **Live Demo**   | https://quiz-qgl9dapkc-ishan-riyals-projects.vercel.app/ |
| ⚙️ **Backend API** | https://quiz-app-backend-8n1a.onrender.com               |
| 💻 **Source Code** | https://github.com/Ishan-Riyal/Quiz-App                  |

> ⏳ The backend runs on Render's free tier and sleeps when idle. The **first request can take 30–60 seconds** to wake it up — please be patient on first login.

---

## 🔑 Demo Accounts

| Role  | Email             | Password   |
| ----- | ----------------- | ---------- |
| User  | `rahul@email.com` | `rahul989` |
| Admin | `admin@email.com` | `admin989` |

These are shared demo credentials. Please don't change passwords or delete data.

---

## ✨ Key Features

1. **Secure authentication with role-based access** — JWT login (sent as an HTTP-only cookie and Bearer token), bcrypt password hashing, and separate User / Admin routes protected on both frontend and backend.
2. **Three question types organised by topic** — MCQ, Theory and Coding questions grouped into collections (topics), with timed questions, shuffled question order and shuffled options.
3. **Server-side answer checking** — correct options are never sent to the browser with the question; answers are validated through the API, so users can't read them from the network tab.
4. **Leaderboard, history and results** — personal best scores, last 10 attempts, a per-topic leaderboard, a question-by-question review screen (correct / wrong / skipped filters) and **PDF export** of results.
5. **Full admin dashboard** — add, edit and delete questions, **bulk import via JSON upload**, bulk delete, topic management, user management (activate/deactivate, promote/demote, delete) and per-topic performance analytics.

Also: profile picture upload (Cloudinary), persisted login/quiz state (Redux Toolkit + redux-persist), responsive UI with Tailwind CSS, toast notifications.

---

## 🛠️ Tech Stack

| Layer        | Technologies                                                                                                    |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| Frontend     | React 19, Vite, Redux Toolkit, redux-persist, React Router 7, Tailwind CSS 4, react-toastify, jsPDF + autoTable |
| Backend      | Node.js, Express 5, Mongoose 9, JWT, bcryptjs, cookie-parser, CORS, Multer                                      |
| Database     | MongoDB Atlas                                                                                                   |
| File Storage | Cloudinary (profile pictures)                                                                                   |
| Deployment   | Vercel (frontend), Render (backend)                                                                             |

---

## 📁 Project Structure

```
Quiz-App/
├── Backend/
│   ├── config/          # MongoDB + Cloudinary setup
│   ├── controllers/     # admin, analytics, auth, collection, quiz, user
│   ├── data/            # sample MCQ / theory / coding question sets (JSON-style)
│   ├── middleware/      # JWT protect + admin guard
│   ├── models/          # User, Collection, Mcq, Theory, Coding, Score
│   ├── routes/          # API route definitions
│   └── server.js
├── Frontend/
│   ├── src/
│   │   ├── components/  # reusable UI (+ Admin components)
│   │   ├── features/    # Redux slices (auth, quiz)
│   │   ├── hooks/       # data-fetching & logic hooks
│   │   ├── Pages/       # user screens + Admin screens
│   │   ├── utils/       # fetchWithAuth helper
│   │   └── store.js
│   └── vite.config.js
├── vercel.json          # proxies /api/* to the Render backend
└── package.json
```

---

## 🔌 API Overview

| Route                                                     | Description                                             | Access |
| --------------------------------------------------------- | ------------------------------------------------------- | ------ |
| `POST /api/auth/register` · `/login` · `/logout`          | Sign up, log in, log out                                | Public |
| `GET /api/auth/me`                                        | Current user profile                                    | User   |
| `GET /api/collection/all`                                 | List all topics                                         | Public |
| `POST /api/collection/add` · `DELETE /api/collection/:id` | Create / delete a topic (cascades to its questions)     | Admin  |
| `GET /api/quiz/:category?type=`                           | Fetch shuffled questions for a topic                    | User   |
| `POST /api/quiz/mcqs/check`                               | Validate an MCQ answer                                  | User   |
| `GET /api/quiz/theory/reveal/:id`                         | Reveal a theory answer                                  | User   |
| `POST /api/users/save-score`                              | Save a quiz score                                       | User   |
| `GET /api/users/leaderboard` · `/history` · `/categories` | Leaderboard, personal history, topics                   | User   |
| `POST /api/users/profile-pic`                             | Upload profile picture                                  | User   |
| `/api/admin/*`                                            | Question CRUD, bulk add/delete, users, stats, analytics | Admin  |

---

## 🚀 Run Locally

**Prerequisites:** Node.js v24.7.0 (used in development), a MongoDB Atlas (or local) database, a Cloudinary account.

```bash
# 1. Clone
git clone https://github.com/Ishan-Riyal/Quiz-App.git
cd Quiz-App

# 2. Install dependencies
npm install
cd Frontend && npm install && cd ..

# 3. Create a .env file in the project root (see below)

# 4. Start backend (port 8000) and frontend (port 8173) together
npm run dev
```

Open **http://localhost:8173**. The Vite dev server proxies `/api` to `http://localhost:8000`.

### Environment Variables

Create `.env` in the **root** folder:

```env
NODE_ENV=development
PORT=8000
MONGO_URI=
JWT_SECRET=
CLIENT_URL=http://localhost:8173

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Optional frontend variable (`Frontend/.env`) — defaults to `http://localhost:8000`:

```env
VITE_API_URL=
```

### Adding Questions

1. Log in as an admin and create a topic from the dashboard.
2. Open the topic → choose a question type → **upload JSON** (sample sets are in `Backend/data/`) or add questions one by one.

> To create your own admin, register a user and promote it from a database/admin account.

---

## 🌍 Deployment

- **Frontend** → Vercel. `vercel.json` rewrites `/api/*` to the Render backend, so the browser talks to a same-origin API (this keeps the `sameSite: strict` auth cookie working) and all other routes fall back to `index.html` for client-side routing.
- **Backend** → Render (Node web service). Environment variables are set in the Render dashboard.
- **Database** → MongoDB Atlas.

---

## 📸 Screenshots

<!-- Add your screenshots to a /screenshots folder and update the paths below -->

| Home                            | Quiz                            |
| ------------------------------- | ------------------------------- |
| ![Home](./screenshots/home.png) | ![Quiz](./screenshots/quiz.png) |

| Result Review                       | Admin Dashboard                   |
| ----------------------------------- | --------------------------------- |
| ![Result](./screenshots/result.png) | ![Admin](./screenshots/admin.png) |

---

## ⚠️ Known Limitations

- **Cold starts:** Render's free tier sleeps after inactivity, so the first request can take 30–60 seconds.
- **Coding & theory questions are practice-style:** there is no code-execution sandbox, so coding answers aren't auto-graded; theory answers are self-checked via a "reveal" button. Only MCQs are validated automatically.
- **No automated tests yet:** the app has been tested manually only.
- **Basic account security:** no email verification, password reset or refresh tokens; the JWT is also kept in `localStorage`.
- **No rate limiting or security headers** (e.g. helmet) on the API yet.
- **Limited pagination:** some admin lists load all records at once, which won't scale to very large question banks.
- **Shared demo admin account:** anyone with the demo credentials can modify demo data.

---

## 🔮 Future Improvements

- Add unit and integration tests (Vitest / Jest + Supertest) and a CI pipeline (GitHub Actions).
- Add rate limiting, helmet, input validation (e.g. Zod / express-validator) and refresh-token auth.
- Email verification and password reset flow.
- Sandboxed code execution to auto-grade coding questions.
- Server-side pagination and search for question and user lists.
- API documentation with Swagger / OpenAPI.
- Dockerize the app and migrate parts of the codebase to TypeScript.
- Accessibility improvements and a dark/light theme toggle.

---

## 📄 License

ISC © Ishan Riyal

---

## 📬 Contact

**Ishan Riyal** — MERN Stack Developer

- GitHub: [Ishan-Riyal](https://github.com/Ishan-Riyal)
- LinkedIn: [ishan-riyal](https://www.linkedin.com/in/ishan-riyal)
