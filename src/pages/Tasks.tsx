import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { selectTasks, updateTask } from "@/redux/features/Task/TaskSlice";
import { useAppDispatch, useAppSeletor } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSeletor(selectTasks);
  const disPatch = useAppDispatch();

  console.log("Tasks:", tasks); // Debugging tasks array

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => disPatch(updateTask("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => disPatch(updateTask("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => disPatch(updateTask("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => disPatch(updateTask("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
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
