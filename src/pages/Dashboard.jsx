import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard-section">
      <div className="welcome-section">
        <h2>Welcome Back!</h2>
        <p>Here's a summary of your productivity.</p>
      </div>
      
      <div className="stats-cards-container">
        <div className="card-container">
          <div className="card stat-card">
            <h3>Total Tasks</h3>
            <p className="value">{totalTasks}</p>
          </div>
        </div>
        <div className="card-container">
          <div className="card stat-card">
            <h3>Completed</h3>
            <p className="value success">{completedTasks}</p>
          </div>
        </div>
        <div className="card-container">
          <div className="card stat-card">
            <h3>Pending</h3>
            <p className="value danger">{pendingTasks}</p>
          </div>
        </div>
      </div>

      <div className="action-section">
        <Link to="/add">
          <button className="primary-btn">+ Add New Task</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
