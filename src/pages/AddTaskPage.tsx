// AddTaskPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddTaskForm from '../components/AddTaskForm';

interface Task {
  name: string;
  description: string;
  priority: string;
  completed: boolean;
}

const AddTaskPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddTask = (newTask: Task) => {
    // Fetch existing tasks from localStorage
    const existingTasksString = localStorage.getItem('tasks');
    const existingTasks: Task[] = existingTasksString ? JSON.parse(existingTasksString) : [];

    // Add the new task to the existing tasks
    const updatedTasks = [...existingTasks, { ...newTask, id: Date.now() }];

    // Update localStorage with the updated tasks
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    console.log('Adding new task:', newTask);
    navigate('/');
  };

  return (
    <div className="pt-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <AddTaskForm onAddTask={handleAddTask} />
      <div className="mt-4">
        <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
          Back to Task List
        </Link>
      </div> 
    </div>
  );
};

export default AddTaskPage;
