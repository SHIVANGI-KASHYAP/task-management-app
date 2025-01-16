import React from 'react';
import './TaskBoard.css';

function TaskBoard({ tasks, onDelete, onStatusChange }) {
  const statusLanes = ['todo', 'in-progress', 'done'];

  return (
    <div className="task-board">
      {statusLanes.map((status) => (
        <div key={status} className="lane">
          <h3>{status.toUpperCase()}</h3>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <div className="task-actions">
                  <button onClick={() => onDelete(task.id)}>Delete</button>
                  {statusLanes
                    .filter((s) => s !== status)
                    .map((s) => (
                      <button key={s} onClick={() => onStatusChange(task.id, s)}>
                        Move to {s}
                      </button>
                    ))}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default TaskBoard;
