// TaskListPage.tsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  completed: boolean;
}

const TaskListPage: React.FC = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  
    // Update localStorage with the modified tasks
    setTasks((updatedTasks) => {
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  return (
    <div className="pt-8 flex flex-col justify-center items-center">
      <div className="flex justify-between w-full lg:w-[80%] lg:">
        <h2 className="text-[1.5rem] font-bold">Task List</h2>
        <div className="flex items-center">
          <Link
            to="/add"
            className="bg-blue-500 text-white font-bold px-2 py-1 rounded hover:bg-blue-700"
          >
            Add Task
          </Link>
        </div>
      </div>

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default TaskListPage;
