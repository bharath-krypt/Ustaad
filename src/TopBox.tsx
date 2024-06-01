import React, { useState, ChangeEvent, FormEvent } from 'react';
import './TopBox.css';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

interface TopBoxProps {
  onClose: () => void;
}

const TopBox: React.FC<TopBoxProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit', formData);
      console.log('Form submitted successfully');
      onClose();
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="top-box">
      <div className="close-btn" onClick={onClose}> <CloseIcon /> </div>
      <h2>Welcome to Our Website!</h2>
      <p>Thank you for visiting us. Please fill out the form below.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TopBox;
