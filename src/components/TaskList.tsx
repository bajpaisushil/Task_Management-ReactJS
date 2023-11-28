// TaskList.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (taskId: number) => void;
  onToggleComplete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleComplete }) => {
  const [sortCriteria, setSortCriteria] = useState<string>(''); // You can set it to 'priority' or 'completed'

  // Update the rendering logic based on the sorting criteria
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortCriteria === 'priority') {
      // Sort by priority: high, medium, low
      const priorityOrder = { high: 1, medium: 2, low: 3 } as Record<string, number>;
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sortCriteria === 'completed') {
      // Sort by completion status: completed, not completed
      return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="mt-8 flex flex-col w-[90%] text-center">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="mb-4">
        {/* Sorting dropdown */}
        <label className="block text-[1rem] font-medium text-gray-700">Sort by</label>
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="mt-1 p-2 w-full border rounded bg-gray-100"
        >
          <option value="">None</option>
          <option value="priority">Priority</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {sortedTasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <ul className="space-y-4">
          {sortedTasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleComplete(task.id)}
                  className="mr-2"
                />
                <Link to={`/edit/${task.id}`}>
                <div className={`font-bold outline outline-2 outline-gray-300 rounded-md p-1 ${task.completed ? 'line-through text-gray-500' : 'text-blue-500'}`}>
                  {task.name}
                </div>
                <div className=''>
                  {task.description}
                </div>
                </Link>
              </div>
              <div>
                <button onClick={() => onDelete(task.id)} className="text-white bg-red-500 rounded-md p-1 hover:text-red-700">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
