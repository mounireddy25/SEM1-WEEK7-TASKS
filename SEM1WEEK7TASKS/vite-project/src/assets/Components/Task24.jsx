import React from 'react';

const Task24 = ({ user }) => {
  return (
    <div>
      {user?.name || <p>Loading...</p>}
      {user?.email || <p>Email not available</p>}
    </div>
  );
};

export default Task24;