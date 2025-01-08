import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/CounterSlice.ts";
import taskReducer from "./features/Task/TaskSlice.ts";
import userReducer from "./features/User/UserSlice.ts";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
