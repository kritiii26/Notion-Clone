import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title,
      subject: subject || 'General',
      dueDate,
      completed: false,
    };

    onAddTask(newTask);
    navigate('/tasks');
  };

  return (
    <form className="task-form card" onSubmit={handleSubmit}>
      <h2>Create New Task</h2>
      <div className="form-group">
        <label>Task Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="E.g., Read chapter 4"
          required 
        />
      </div>
      <div className="form-group">
        <label>Subject</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject...</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Literature">Literature</option>
          <option value="Computer Science">Computer Science</option>
        </select>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
