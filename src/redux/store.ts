import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Api/BaseApi.ts";
import counterReducer from "./features/Counter/CounterSlice.ts";
import taskReducer from "./features/Task/TaskSlice.ts";
import userReducer from "./features/User/UserSlice.ts";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
