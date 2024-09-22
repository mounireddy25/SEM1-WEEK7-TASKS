import React, { createContext, useReducer } from 'react';
import Task1202 from './Task1202';

const initialState = {
  state: {},
  dispatch: () => {},
};

const Task1201 = createContext(initialState);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Task1201.Provider value={{ state, dispatch }}>
      {children}
    </Task1201.Provider>
  );
};

export { Task1201, Provider };