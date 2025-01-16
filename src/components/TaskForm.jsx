import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onTaskCreate }) {
  const [task, setTask] = useState({ title: '', description: '', status: 'todo' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskCreate(task);
    setTask({ title: '', description: '', status: 'todo' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
