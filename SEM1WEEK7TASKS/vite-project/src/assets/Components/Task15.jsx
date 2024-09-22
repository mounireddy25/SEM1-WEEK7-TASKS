import React, { useRef, useEffect } from 'react';

const Task15 = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus on render"
      />
    </div>
  );
};

export default Task15;