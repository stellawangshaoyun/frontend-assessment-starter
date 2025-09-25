import { Clock, CheckSquare, Zap, Code, Palette, Play } from "lucide-react";
import { TaskForm } from "./components/ui/TaskForm";
import { useState } from "react";
import { Task, TaskFormData } from "./types";
import { TaskList } from "./components/ui/TaskList";

const requirements = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Core Implementation",
    time: "35 min",
    items: [
      "Task CRUD operations",
      "TypeScript interfaces",
      "Form validation",
      "State management",
    ],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Animations & Interactions",
    time: "15 min",
    items: [
      "Framer Motion animations",
      "Micro-interactions",
      "Hover states",
      "Transition feedback",
    ],
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Design & UX",
    time: "10 min",
    items: [
      "Tailwind CSS styling",
      "Responsive design",
      "Accessibility",
      "Visual hierarchy",
    ],
  },
];
const initialTasks: Task[] = [];
function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-900">
              60 Minutes Assessment
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frontend Take-Home Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Build an{" "}
            <span className="font-semibold text-indigo-600">
              Interactive Task Dashboard
            </span>{" "}
            that showcases your React, TypeScript, and animation skills.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-3 py-1 bg-white/80 rounded-full text-gray-700 font-medium">
              React 18+
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full text-gray-700 font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full text-gray-700 font-medium">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full text-gray-700 font-medium">
              Framer Motion
            </span>
          </div>
        </header>

        {/* Quick Start */}
        <div className="bg-white rounded-xl shadow-lg border p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">Quick Start</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Your Challenge</h3>
              <p className="text-gray-600 text-sm mb-4">
                Replace this starter page with a fully functional task dashboard
                that includes task creation, completion, deletion, and smooth
                animations.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckSquare className="w-4 h-4" />
                <span>
                  Task interface already defined in{" "}
                  <code className="bg-gray-100 px-1 rounded text-xs">
                    src/types/index.ts
                  </code>
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Development Server
              </h4>
              <div className="bg-gray-900 rounded p-3 text-sm">
                <code className="text-green-400">npm run dev</code>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Server should already be running on localhost:5173
              </p>
            </div>
          </div>
        </div>

        {/* Requirements Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  {req.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{req.title}</h3>
                  <span className="text-sm text-gray-500">{req.time}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {req.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Current Progress */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Total Tasks {totalTasks} Completed {completedTasks}
          </h2>

          <div>
            <TaskList setTasks={setTasks} tasks={tasks} />
          </div>
        </div>

        {/* Key Files */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Key Files to Know
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-gray-50 rounded">
              <code className="text-blue-600 font-medium">
                src/types/index.ts
              </code>
              <p className="text-gray-600 mt-1">Task interface & types</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <code className="text-blue-600 font-medium">
                src/components/ui/
              </code>
              <p className="text-gray-600 mt-1">Reusable UI components</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <code className="text-blue-600 font-medium">
                src/utils/index.ts
              </code>
              <p className="text-gray-600 mt-1">Utility functions</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <code className="text-blue-600 font-medium">
                tailwind.config.js
              </code>
              <p className="text-gray-600 mt-1">Styling configuration</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            📖 Full requirements and evaluation criteria are in the{" "}
            <code className="bg-gray-100 px-1 rounded">README.md</code>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Good luck! We're excited to see what you build.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
