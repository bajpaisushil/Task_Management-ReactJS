// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-blue-100 to-white min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:taskId" element={<EditTaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
