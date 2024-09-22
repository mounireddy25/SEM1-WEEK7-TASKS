import React, { useState } from 'react';
import Task1101 from './Task1101';
import Task1102 from './Task1102';

const Task11 = () => {
  const [parentState, setParentState] = useState({
    name: 'Koms',
    age: 20,
  });

  const handleUpdateState = (updatedState) => {
    setParentState(updatedState);
  };

  return (
    <div>
      <Task1101
        parentState={parentState}
        onUpdateState={handleUpdateState}
      />
      <Task1102 parentState={parentState} />
    </div>
  );
};

export default Task11;