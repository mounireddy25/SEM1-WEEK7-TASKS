import React, { useState } from 'react';

const Task19 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputClick = (event) => {
    setIsFocused(true);
  };

  const handleInputBlur = (event) => {
    setIsFocused(false);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        onBlur={handleInputBlur}
        placeholder="Enter text"
      />
      {isFocused ? <p>Input field is focused</p> : <p>Input field is not focused</p>}
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default Task19;