import React from 'react';

const Task25 = () => {
  const tasks = [
    { id: 1, task: 'Buy milk' },
    { id: 2, task: 'Walk the dog' },
    { id: 3, task: 'Do laundry' },
  ];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={(task.id)}>{task.task}</li>
      ))}
    </ul>
  );
};

export default Task25;