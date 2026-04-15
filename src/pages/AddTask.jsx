import React from 'react';
import TaskForm from '../components/TaskForm.jsx';

const AddTask = ({ onAddTask }) => {
  return (
    <div>
      <TaskForm onAddTask={onAddTask} />
    </div>
  );
};

export default AddTask;
