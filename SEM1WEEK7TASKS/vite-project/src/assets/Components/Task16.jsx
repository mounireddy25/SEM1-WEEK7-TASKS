import React from 'react';
import Task1601 from './Task1601';

const Task16 = () => {
  const { data: users, loading, error } = Task1601('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task16;