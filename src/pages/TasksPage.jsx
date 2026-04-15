import React, { useState } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import TaskList from '../components/TaskList.jsx';

const TasksPage = ({ tasks, onToggleStatus, onDelete }) => {
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h2>Your Tasks</h2>
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <TaskList 
        tasks={filteredTasks} 
        onToggleStatus={onToggleStatus} 
        onDelete={onDelete} 
      />
    </div>
  );
};

export default TasksPage;
