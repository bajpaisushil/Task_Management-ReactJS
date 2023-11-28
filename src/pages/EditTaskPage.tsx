import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditTaskForm from '../components/EditTaskForm';

interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
  completed: boolean;
}

const EditTaskPage: React.FC = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  // Dummy tasks state (replace with your logic to fetch tasks)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  // Fetch tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  // Find the task to edit based on the taskId parameter
  useEffect(() => {
    const task = tasks.find((task) => task.id === Number(taskId));
    setTaskToEdit(task || null);
  }, [tasks, taskId]);

  // Function to handle updating a task
  const handleUpdateTask = (updatedTask: Task) => {
    // Update the tasks state with the edited task
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);

    // Save the updated tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Navigate back to the task list page
    navigate('/');
  };

  if (!taskToEdit) {
    return <p>Task not found.</p>;
  }

  return (
    <div className="pt-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <EditTaskForm task={taskToEdit} onUpdateTask={handleUpdateTask} />
    </div>
  );
};

export default EditTaskPage;
