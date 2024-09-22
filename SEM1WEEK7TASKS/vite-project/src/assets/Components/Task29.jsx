import React, { useState } from 'react';

const Task29 = () => {
  const [controlledInput, setControlledInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Controlled input:', controlledInput);
    console.log('Uncontrolled input:', document.getElementById('uncontrolledInput').value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Controlled Input:
        <input
          type="text"
          value={controlledInput}
          onChange={(e) => setControlledInput(e.target.value)}
        />
      </label>
      <br />
      <label>
        Uncontrolled Input:
        <input
          type="text"
          id="uncontrolledInput"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Task29;