# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

LIVE AT=> https://task-management-react-js.vercel.app/

# Task Management App

This is a simple task management app built with React and TypeScript.

## Features

- View a list of tasks.
- Add new tasks.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks.

## Project Structure

/src
|-- components
| |-- AddTaskForm.tsx
| |-- EditTaskForm.tsx
| |-- TaskList.tsx
|-- pages
| |-- AddTaskPage.tsx
| |-- EditTaskPage.tsx
| |-- TaskListPage.tsx
|-- App.tsx
|-- index.tsx

## Design Choices

- **React and TypeScript:** Chosen for a scalable and maintainable codebase.
- **LocalStorage:** Tasks are stored in the browser's `localStorage` for simplicity.

## Additional Features

- **Sorting:** Tasks can be sorted by priority or completion status.
- **Pagination:** Implemented pagination for the task list.

## Setup

1. Clone the repository:
   git clone https://github.com/your-username/task-management-app.git

2. Install the dependencies:
   cd task-management-app
   npm install

3. Run the app:
   npm run dev

Tasks Page :
![Screenshot 2023-11-28 113149](https://github.com/bajpaisushil/Task_Management-ReactJS/assets/111970311/9363549d-cf7a-4262-a1b7-3a698fdfc02e)

Add Task Page :
![Screenshot 2023-11-28 113228](https://github.com/bajpaisushil/Task_Management-ReactJS/assets/111970311/aaafd72e-bcc5-4b74-ae13-7927637ca331)

Update Task Page :
![Screenshot 2023-11-28 113240](https://github.com/bajpaisushil/Task_Management-ReactJS/assets/111970311/741756e4-5007-47e2-b650-53bed0a0ee91)

Hope You would like it.
Feel free it give it a Star.
