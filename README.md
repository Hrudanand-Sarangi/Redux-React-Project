# React + Vite

# 📝 Redux Todo App

##  Project Overview
This is a **To-Do List App** built using **React** and **Redux Toolkit** for state management. Users can:
- Add new tasks
- Mark tasks as done (with a line-through effect)
- Delete tasks from the list

This project follows best practices for **Redux state management** in React applications.

---
## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **State Management:** Redux Toolkit
- **Build Tool:** Vite
- **Package Manager:** npm

---
## 📂 Folder Structure
```
📦 Redux-Todo-App
├── 📂 src
│   ├── 📂 components
│   │   ├── AddForm.jsx   # Input form to add tasks
│   │   ├── Todo.jsx      # Displays and manages the todo list
│   ├── 📂 features
│   │   ├── todoSlice.js  # Redux logic for adding, deleting, and marking tasks
│   ├── App.jsx           # Main application
│   ├── main.jsx          # React entry file
├── 📄 package.json       # Dependencies
├── 📄 README.md          # Project documentation
```

---
## 🏗️ How to Install & Run
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/redux-todo-app.git
cd redux-todo-app
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app will run at `http://localhost:5173/` (or as shown in the terminal).

---
## 🔥 How Redux is Used in This Project
### **1. Creating the Redux Slice** (src/features/todoSlice.js)
- Defines the **initial state** with an array of `todos`.
- Uses `reducers` to handle actions (`addTodo`, `deleteTodo`, `markAsDone`).
- Uses `nanoid()` to generate unique IDs for each task.
```js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { todos: [{ id: 'abc', task: 'Demo Task', isDone: false }] };

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), task: action.payload, isDone: false });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, isDone: true } : todo
      );
    },
  },
});
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
```
### **2. Setting up the Redux Store** (src/store.js)
- Configures Redux store with `todoSlice` reducer.
```js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```
### **3. Using Redux in Components** (src/components/Todo.jsx)
- **`useSelector`** to get `todos` from the Redux store.
- **`useDispatch`** to trigger `addTodo`, `deleteTodo`, and `markAsDone` actions.
```js
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
          {todo.task}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          <button onClick={() => dispatch(markAsDone(todo.id))}>Mark As Done</button>
        </li>
      ))}
    </ul>
  );
}
```

##  Challenges & Learnings
- **Issue:** `setTask("")` was not clearing the input field.
  - **Solution:** Set the `value` prop in `<input>` to `task`.
- **Issue:** Redux state wasn't updating immediately.
  - **Solution:** Used immutable state updates with the spread operator (`...todo`).

---
##  Future Improvements
- Add local storage support to persist tasks.
- Improve UI with animations.
- Implement a dark mode toggle.

---
##  Contributing
1. **Fork the repo**
2. Create a new branch: `git checkout -b feature-branch`
3. Make changes and commit: `git commit -m 'Add a new feature'`
4. Push changes: `git push origin feature-branch`
5. Submit a pull request 

---
## 📝 License
This project is **free to use** and open-source under the [MIT License](LICENSE).



