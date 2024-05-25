import { useState } from 'react';
import './TopBox.css';


const TopBox = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions with the form data here
    // For example, you can send the data to an API or store it locally
    console.log(formData);
    onClose(); // Close the popup form after submitting
  };

  return (
    <div className="top-box">
      <div className="close-btn" onClick={onClose}>X</div>
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
