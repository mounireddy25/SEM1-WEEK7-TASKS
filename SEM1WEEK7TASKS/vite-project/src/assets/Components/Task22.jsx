import React, { useState } from 'react';

const Task22 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>Welcome, you are logged in!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Please login to access content.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
 );
}
};

export default Task22;