# 📚 Study Planner & Task Tracker

*(A React-based Productivity App Clone)*

This project is a **React-based clone of a productivity/task management application**, inspired by tools like Notion, Google Tasks, and Todoist.

The goal was to recreate the core idea of such platforms — allowing users to manage tasks, organize work, and track progress — using only frontend technologies like React, without building a full backend.

---

## 🚀 About the Project

In this application, users can create and manage their study tasks in a simple and structured way.

The focus is on **usability and core functionality**, similar to real-world productivity apps, while keeping the implementation limited to React concepts covered in class.

---

## 🎯 What This Project Demonstrates

This project was built to:

* Apply core **React concepts** in a practical scenario
* Simulate a real-world application using **static data / local storage**
* Build a **multi-page interactive UI** using routing
* Maintain a clean and modular code structure

---

## 🛠️ Tech Stack

* React 
* JavaScript 
* HTML
* CSS
  

---

## ✨ Features

### 📝 Task Management

* Add new tasks with title, subject, and due date
* Mark tasks as completed
* Delete tasks

---

### 📂 Organization (Inspired by Productivity Apps)

* Tasks can be grouped by subject
* Helps simulate how real apps organize content

---

### 🔍 Filtering System

* View:

  * All tasks
  * Completed tasks
  * Pending tasks
* Filter tasks based on subject

---

### 📊 Dashboard View

* Displays:

  * Total tasks
  * Completed tasks
  * Pending tasks

This is similar to overview sections in apps like Notion or Todoist.

---

### 🌐 Routing (Multi-Page Experience)

* `/` → Dashboard
* `/add` → Add Task
* `/tasks` → Task List

---

### 💾 Data Persistence

* Uses **local storage** to save tasks
* Mimics backend behavior without actually building one

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── FilterBar.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── AddTask.jsx
│   ├── TasksPage.jsx
│
├── App.jsx
├── main.jsx
├── index.css
```

---

## ⚙️ How to Run Locally

```bash
npm install
npm run dev
```

---

## 🧠 React Concepts Used

* Functional Components
* Props
* useState
* useEffect
* Conditional Rendering
* Lists & Keys
* React Router

---

## 📌 Future Scope

Some features that can be added later:

* Edit tasks
* Drag-and-drop functionality
* Calendar view
* Backend integration

---

## 📄 Submission Note

This project is developed as part of a React assignment where the objective was to build a clone of a real-world web application.

The focus is on **correct use of React concepts, clean structure, and working functionality**, rather than advanced styling or backend complexity.

---
