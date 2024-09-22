import React, { useState } from 'react';

const Task28 = () => {
  const [formData, setFormData] = useState({
    name: '',
    terms: false,
    country: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:<input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Accept terms:
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Country:
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select country</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Task28;