import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "React Fundamental",
      description: "This is a fundamental Course of the Front End Development",
      priority: "high",
      dueDate: new Date(2025, 0, 15),
      isCompleted: false,
      assignedTo: "1",
    },
    {
      id: "2",
      title: "Team Meeting",
      description: "Attend the weekly team meeting at 10 AM.",
      priority: "medium",
      dueDate: new Date(2025, 0, 16), // January 16, 2025
      isCompleted: false,
      assignedTo: "2",
    },
    {
      id: "3",
      title: "Code Review",
      description: "Review the code changes submitted by the development team.",
      priority: "low",
      dueDate: new Date(2025, 0, 20), // January 20, 2025
      isCompleted: false,
      assignedTo: null,
    },
  ],
  filter: "all",
};
type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;
const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};
const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
    toogleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toogleCompleteState, deleteTask, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
