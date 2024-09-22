const initialState = {
    user: null,
    cart: [],
  };
  
  const Task1202 = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.payload };
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'LOGOUT':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default Task1202;  