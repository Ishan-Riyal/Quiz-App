import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";

// Import store and persistor for state management
import { store, persistor } from "./store.js";
// Import PersistGate to delay rendering until persisted state is retrieved
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* Wrap App with PersistGate to maintain state after refresh */}
    <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
