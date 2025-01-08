export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: "all" | "low" | "medium" | "high";
  dueDate: Date | null;
  isCompleted: boolean;
}
