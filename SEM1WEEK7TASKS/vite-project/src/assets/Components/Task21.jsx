import React, { useState } from 'react';

const Task21 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email || !email.includes('@')) {
      errors.email = 'Invalid email';
    }
    if (!password || password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
        console.log('Form submitted:', { name, email, password });
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Task21;