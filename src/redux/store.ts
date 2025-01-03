import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/CounterSlice.ts";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
