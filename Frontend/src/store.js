import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import quizReducer from "./features/quiz/quizSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combine all slice reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

// Configuration for redux-persist to maintain state on page refresh
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["quiz", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
