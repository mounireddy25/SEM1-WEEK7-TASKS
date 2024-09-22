import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

const Task26 = () => {
  const users = [
    { id: 1, name: 'Mouni', email: 'mouni@example.com', phone: '1234567890' },
    { id: 2, name: 'Divi', email: 'divi@example.com', phone: '0987654321' },
    { id: 3, name: 'Kalyani', email: 'kalyani@example.com', phone: '6754839201' },
  ];

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={(user.id)} user={user} />
      ))}
 </div>
  );
};

export default Task26;