export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  dueDate: Date | null;
  isCompleted: boolean;
}
