import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FilterBar from '../components/FilterBar.jsx';
import TaskList from '../components/TaskList.jsx';

const SubjectPage = ({ tasks, onToggleStatus, onDelete }) => {
  const { name } = useParams();
  const [filter, setFilter] = useState('All');

  // Filter tasks for this particular subject
  // Use loose matching to handle potential casing/spacing issues in the URL
  const subjectTasks = tasks.filter(task => 
    task.subject.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  const filteredTasks = subjectTasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', textTransform: 'capitalize' }}>
        {decodeURIComponent(name)} Tasks
      </h2>
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <TaskList 
        tasks={filteredTasks} 
        onToggleStatus={onToggleStatus} 
        onDelete={onDelete} 
      />
    </div>
  );
};

export default SubjectPage;
