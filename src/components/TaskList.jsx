import React from 'react';
import TaskItem from './TaskItem.jsx';

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
  if (tasks.length === 0) {
    return <div className="card"><p style={{textAlign: 'center', color: '#666'}}>No tasks found. Try adding some!</p></div>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleStatus={onToggleStatus} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TaskList;
