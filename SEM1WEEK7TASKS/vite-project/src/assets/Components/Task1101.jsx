import React from 'react';

const Task1101 = ({ parentState, onUpdateState }) => {
  const handleUpdate = () => {
    onUpdateState({
      name: 'Jane Doe',
      age: 25,
    });
  };

  return (
    <div>
      <h2>Child Component 1</h2>
      <p>Name: {parentState.name}</p>
      <p>Age: {parentState.age}</p>
      <button onClick={handleUpdate}>Update Parent State</button>
    </div>
  );
};

export default Task1101;