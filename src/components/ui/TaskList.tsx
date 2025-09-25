import { Task } from "@/types";
import { TaskForm } from "./TaskForm";

interface TaskListProp {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TaskList = ({ tasks, setTasks }: TaskListProp) => {
  const handleTaskSubmit = (data: Task) => {
   setTasks(prevTasks => {
      const index = prevTasks.findIndex(task => task.id === data.id);
  
      if (index >= 0) {
        const newTasks = [...prevTasks];
        newTasks[index] = data;
        return newTasks;
      } else {
        return [...prevTasks, data];
      }
    });
  };
  return (
    <ul className="max-w-md space-y-2 divide-gray-200 dark:divide-gray-700">
      <TaskForm onSubmit={handleTaskSubmit}  setTasks={ setTasks}/>
      {tasks &&
        tasks.map((task, index) => (
          <li
            key={index}
            className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <TaskForm onSubmit={handleTaskSubmit} initialData={task}setTasks={ setTasks} />
          </li>
        ))}
    </ul>
  );
};
