import { cn, formatDate } from "@/utils";
import { Checkbox } from "radix-ui";
import { Check } from "lucide-react";
import { Task } from "@/types";
import { useState } from "react";
interface TaskCardProp {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TaskCard = ({ task ,  setTasks}: TaskCardProp) => {
  const [checked, setChecked] = useState<boolean>(task.completed);
  const toggleCompletion = (id: string,checked:boolean) => {
    setChecked(checked as Task["completed"])
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed:checked } : task
      )
    );
  };
  return (
    <div className="flex items-center space-x-4 ">
      <div className="shrink-0">
        <Checkbox.Root
          className="flex size-[25px] appearance-none items-center justify-center rounded bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
          checked={checked}
          onCheckedChange={(e) => {toggleCompletion(task.id,e as Task["completed"]); }}
        >
          <Checkbox.Indicator className="text-violet11">
            <Check />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex">
          <p className="text-sm font-medium text-gray-900 truncate whitespace-normal break-words">
            {task.title}
          </p>
          <span
            className={cn(
              task.priority === "low" && "bg-blue-100 text-blue-800",
              task.priority === "medium" && "bg-amber-100 text-amber-600",
              task.priority === "high" && "bg-rose-100 text-rose-800",
              "text-xs font-semibold px-2.5 py-0.5 rounded-sm  ms-3 h-6",
            )}
          >
            {task.priority}
          </span>
        </div>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400 min-w-56 text-start whitespace-normal break-words">
          {task.description}
        </p>
      </div>
      {task.dueDate && (
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {formatDate(task.dueDate)}
        </div>
      )}
    </div>
  );
};
