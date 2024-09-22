import React, { useContext } from 'react';
import { Task1201 } from './Task1201';

const Task12 = () => {
  const { state, dispatch } = useContext(Task1201);

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: { name: 'Mouni' } });
  };

  return (
    <div>
      <h1>Main Component</h1>
      <p>User: {state.user?.name}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Task12;