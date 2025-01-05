import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/CounterSlice.ts";
import taskReducer from "./features/Task/TaskSlice.ts";
import logger from "./middlewares/logger.ts";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
