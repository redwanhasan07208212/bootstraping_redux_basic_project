import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "./../../store";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [],
  filter: "all",
};
const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };

      state.tasks.push(taskData);
    },
  },
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
