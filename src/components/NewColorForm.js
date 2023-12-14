import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: '', hex: '#ffffff' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    navigate('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="hex">Color Value:</label>
      <input
        type="color"
        id="hex"
        name="hex"
        value={formData.hex}
        onChange={handleChange}
      />

      <button>Add Color</button>
    </form>
  );
}

export default NewColorForm;
