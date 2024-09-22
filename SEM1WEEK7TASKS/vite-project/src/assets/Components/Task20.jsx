import React from 'react';

const Task20 = () => {
  const handleGrandParentClick = (event) => {
    console.log('Grandparent clicked');
  };

  const handleParentClick = (event) => {
    console.log('Parent clicked');
  };

  const handleChildClick = (event) => {
    console.log('Child clicked');
  };

  return (
    <div onClick={handleGrandParentClick} style={{ backgroundColor: 'lightblue', padding: 20 }}>
      Grandparent
      <div onClick={handleParentClick} style={{ backgroundColor: 'lightgreen', padding: 20 }}>
      Parent
        <button onClick={handleChildClick} style={{ backgroundColor: 'yellow', padding: 10 }}>
          Child
        </button>
      </div>
    </div>
  );
};

export default Task20;