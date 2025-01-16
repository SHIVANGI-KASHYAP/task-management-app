import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskBoard from './TaskBoard';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm onTaskCreate={addTask} />
      <TaskBoard tasks={tasks} onDelete={deleteTask} onStatusChange={updateTaskStatus} />
    </div>
  );
}

export default TaskManager;
