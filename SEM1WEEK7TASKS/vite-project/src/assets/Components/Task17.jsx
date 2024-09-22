import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
};

const Task17 = () => {
const [state, dispatch] = useReducer(counterReducer, { count: 0 });

const handleIncrement = () => {
  dispatch({ type: ACTIONS.INCREMENT });
};

const handleDecrement = () => {
  dispatch({ type: ACTIONS.DECREMENT });
};

const handleReset = () => {
  dispatch({ type: ACTIONS.RESET });
};

return (
  <div>
    <p>Count: {state.count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
  </div>
);
};

export default Task17;