import React, { useState } from 'react';

const Task27 = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Task27;  