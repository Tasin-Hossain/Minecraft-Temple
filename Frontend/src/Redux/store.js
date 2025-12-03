import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "minitasin",
  version: 1,
  storage,
};


const rootReducer = combineReducers({
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
  // preloadedState: {
  //   auth: {
  //     user: savedAuth?.user || null,
  //     token: savedAuth?.token || null,
  //     isAuthenticated: savedAuth ? true : false,
  //   },
  // },


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;