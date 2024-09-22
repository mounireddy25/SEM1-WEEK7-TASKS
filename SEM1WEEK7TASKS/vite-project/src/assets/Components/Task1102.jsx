import React from 'react';

const Task1102 = ({ parentState }) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <p>Name: {parentState.name}</p>
      <p>Age: {parentState.age}</p>
    </div>
  );
};

export default Task1102;