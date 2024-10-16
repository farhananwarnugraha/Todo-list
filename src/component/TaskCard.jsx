// import React from 'react';
import './TaskCard.css'; 

// eslint-disable-next-line react/prop-types
const TaskCard = ({ groupName, timeRange, taskTitle, progress }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <h3>{groupName}</h3>
        <p>{timeRange}</p>
      </div>
      <div className="task-body">
        <p>{taskTitle}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className='progress-text'>
            <p>{progress}%</p>
        </div>
      </div>
      <div className="task-footer">
        <button>New Task</button>
      </div>
    </div>
  );
};

export default TaskCard;