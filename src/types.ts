export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  dueDate: null;
  isCompleted: boolean;
}
