import {
  Action,
  ThunkAction,
  configureStore,
  EnhancedStore,
} from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { waiversApi } from "./waivers/services";
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = (): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [],
          warnAfter: 500,
          ignoreState: true,
          ignoreActions: true,
        },
      }).concat(waiversApi.middleware),
  });
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);

export default store;
