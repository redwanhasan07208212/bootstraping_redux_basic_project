import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../../store";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "CSE07208212",
      title: "Initialize FrontEnd",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "CSE07208213",
      title: "Create Github Repo",
      description: "Create Stage Branch ",
      dueDate: "2025-11",
      isCompleted: true,
      priority: "Medium",
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {},
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export default taskSlice.reducer;
