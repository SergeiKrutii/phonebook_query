import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { apiSlice } from "app/api/apiSlice";
import themeReducer from "./theme/themeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const themePersistConfig = {
  key: "globalTheme",
  storage,
  whitelist: ["value"],
};

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    globalTheme: persistReducer(themePersistConfig, themeReducer),
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
