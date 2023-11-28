// AddTaskForm.tsx
import React, { useState } from 'react';

// Define the types for the task details
interface Task {
  name: string;
  description: string;
  priority: string;
  completed: boolean;
}

interface AddTaskFormProps {
  // Callback function to handle adding a new task
  onAddTask: (task: Task) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  // State for form fields
  const [task, setTask] = useState<Task>({
    name: '',
    description: '',
    priority: 'low',
    completed: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    onAddTask(task);
    setTask({
      name: '',
      description: '',
      priority: 'low',
      completed: false,
    });
  };

  return (
    <div className="mt-8 flex flex-col justify-center items-center w-full lg:w-[80%]">
      <form className='w-full flex flex-col'>
        <div className="mb-4">
          {/* Task Name input */}
          <label className="block text-sm font-medium text-gray-700">Task Name</label>
          <input
            type="text"
            name='name'
            value={task.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          {/* Task Description textarea */}
          <label className="block text-sm font-medium text-gray-700">Task Description</label>
          <textarea
            value={task.description}
            name='description'
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"            
          />
        </div>
        <div className="mb-4">
          {/* Priority dropdown */}
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            value={task.priority}
            name='priority'
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        {/* Add Task button */}
        <button
          type="button"
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
