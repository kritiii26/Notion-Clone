import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import AddTask from './pages/AddTask.jsx';
import TasksPage from './pages/TasksPage.jsx';
import SubjectPage from './pages/SubjectPage.jsx';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('productivity_app_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('productivity_app_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleToggleStatus = (id) => {
    setTasks((prev) => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter(task => task.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        
        {/* Sidebar Structure */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Study Planner</h2>
            <p className="username">Welcome, Student</p>
          </div>
          
          <nav className="sidebar-nav">
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/tasks" className="nav-link">Tasks</Link>
            <Link to="/add" className="nav-link">Add Task</Link>
          </nav>

          <div className="sidebar-section">
            <h3>Subjects</h3>
            <ul className="subject-list">
              <li><Link to="/subject/Math" style={{color:'inherit', textDecoration:'none'}}>Math</Link></li>
              <li><Link to="/subject/Science" style={{color:'inherit', textDecoration:'none'}}>Science</Link></li>
              <li><Link to="/subject/History" style={{color:'inherit', textDecoration:'none'}}>History</Link></li>
              <li><Link to="/subject/Literature" style={{color:'inherit', textDecoration:'none'}}>Literature</Link></li>
              <li><Link to="/subject/Computer%20Science" style={{color:'inherit', textDecoration:'none'}}>Computer Science</Link></li>
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <div className="content-area">
          {/* Header Section */}
          <header className="content-header">
            <h1>Study Planner</h1>
            <nav className="top-nav">
              <Link to="/">Dashboard</Link>
              <Link to="/tasks">Tasks</Link>
              <Link to="/add">Add Task</Link>
            </nav>
          </header>

          <main className="content-main">
            <Routes>
              <Route path="/" element={<Dashboard tasks={tasks} />} />
              <Route path="/add" element={<AddTask onAddTask={handleAddTask} />} />
              <Route 
                path="/tasks" 
                element={
                  <TasksPage 
                    tasks={tasks} 
                    onToggleStatus={handleToggleStatus}
                    onDelete={handleDeleteTask}
                  />
                } 
              />
              <Route 
                path="/subject/:name" 
                element={
                  <SubjectPage 
                    tasks={tasks} 
                    onToggleStatus={handleToggleStatus}
                    onDelete={handleDeleteTask}
                  />
                } 
              />
            </Routes>
          </main>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
