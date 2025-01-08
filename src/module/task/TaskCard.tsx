import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toogleCompleteState,
} from "@/redux/features/Task/TaskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface Iprops {
  task: ITask;
}

export default function TaskCard({ task }: Iprops) {
  // console.log("Rendering TaskCard:", task); // Debugging task props
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "high",
              "bg-red-500": task.priority === "medium",
              "bg-gray-500": !["low", "medium", "high"].includes(task.priority),
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            className="p-0 text-red-500"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <Trash2 />
          </Button>
          <Checkbox onClick={() => dispatch(toogleCompleteState(task.id))} />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <div className={cn("size-3 rounded-full bg-emerald-800")}></div>
        <p className=" text-left">{task.description}</p>
      </div>
    </div>
  );
}
