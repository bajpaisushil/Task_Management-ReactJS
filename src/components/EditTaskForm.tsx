import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  completed: boolean;
}

interface EditTaskFormProps {
  task: Task;
  onUpdateTask: (updatedTask: Task) => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, onUpdateTask }) => {
  const [updatedTask, setUpdatedTask] = useState<Task>(task);

  useEffect(() => {
    setUpdatedTask(task);
  }, [task]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleUpdateTask = () => {
    onUpdateTask(updatedTask);
  };

  return (
    <div className="mt-8 flex flex-col justify-center items-center w-full lg:w-[80%]">
      <form className='w-full flex flex-col'>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Task Name</label>
          <input
            type="text"
            name="name"
            value={updatedTask.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Task Description</label>
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            name="priority"
            value={updatedTask.priority}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleUpdateTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
