// import React from 'react';
import TaskCard from './component/TaskCard';
import './App.css';

const tasks = [
  { groupName: 'Group Task 1', timeRange: 'January - March', taskTitle: 'Re-designed the zero-g doggie bags. No more spills!', progress: 100 },
  { groupName: 'Group Task 2', timeRange: 'April - June', taskTitle: 'Bundle interplanetary analytics for improved transmission', progress: 30 },
  { groupName: 'Group Task 3', timeRange: 'July - September', taskTitle: 'Data Migration: Performance & Culture End Game', progress: 60 },
  { groupName: 'Group Task 4', timeRange: 'October - December', taskTitle: 'Bundle interplanetary analytics for improved transmission', progress: 20 },
];

function App() {
  return (
    <div className="app">
      <div className='app-header'>
        <h1>Product Roadmap</h1>
        <button>New Group Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            groupName={task.groupName}
            timeRange={task.timeRange}
            taskTitle={task.taskTitle}
            progress={task.progress}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
