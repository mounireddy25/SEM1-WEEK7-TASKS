import React, { useState } from 'react';

const Task8 = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && (
        <p>Submitted Value: {submittedValue}</p>
      )}
    </div>
  );
};

export default Task8;