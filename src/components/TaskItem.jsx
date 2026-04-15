import React from 'react';

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggleStatus(task.id)} 
        />
        <div>
          <div className="task-title" style={{ fontWeight: 600 }}>{task.title}</div>
          <div className="task-meta" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#666', marginTop: '0.2rem' }}>
            <span className="task-badge">{task.subject}</span>
            {task.dueDate && <span>Due: {task.dueDate}</span>}
          </div>
        </div>
      </div>
      <div className="task-actions">
        <button className="danger" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
