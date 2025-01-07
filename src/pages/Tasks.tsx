import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { selectTasks } from "@/redux/features/Task/TaskSlice";
import { useAppSeletor } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSeletor(selectTasks);

  console.log("Tasks:", tasks); // Debugging tasks array

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks?.length > 0 ? (
          tasks.map((task) => <TaskCard task={task} key={task.id} />)
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
}
