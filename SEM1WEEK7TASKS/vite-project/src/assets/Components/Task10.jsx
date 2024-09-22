import React, { useState } from 'react';

const Task10 = ({propName, propAge}) => {
  const [stateName, setStateName] = useState('Initial State Name');
  const [stateAge, setStateAge] = useState(0);

  const handleStateUpdate = () => {
    setStateName('Kalyani');
    setStateAge(20);
  };

  return (
    <div>
      <h2>Props</h2>
      <p>Name: {propName}</p>
      <p>Age: {propAge}</p>

      <h2>State</h2>
      <p>Name: {stateName}</p>
      <p>Age: {stateAge}</p>

      <button onClick={handleStateUpdate}>Update State</button>
    </div>
  );
};

export default Task10;