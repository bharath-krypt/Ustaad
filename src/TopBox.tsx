// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import './TopBox.css';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// interface TopBoxProps {
//   onClose: () => void;
// }

// const TopBox: React.FC<TopBoxProps> = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     phoneNumber: '',
//     email: ''
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/submit', formData);
//       toast.success('Form submitted successfully');
//       onClose();
//     } catch (error) {
//       toast.error('Error submitting form');
//       console.error('Error submitting form', error);
//     }
//   };

//   return (
//     <div className="top-box">
//       <ToastContainer />
//       <div className="close-btn" onClick={onClose}> <CloseIcon /> </div>
//       <h2>Welcome to Our Website!</h2>
//       <p>Thank you for visiting us. Please fill out the form below.</p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </label>
//         <label>
//           Age:
//           <input type="number" name="age" value={formData.age} onChange={handleChange} />
//         </label>
//         <label>
//           Phone Number:
//           <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default TopBox;
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './TopBox.css';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from './firebase';  // Import the Firestore database
import { collection, addDoc } from 'firebase/firestore';  // Import Firestore methods

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check local storage to see if the form has already been submitted
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (formSubmitted === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'formSubmissions'), formData);
      console.log('Document written with ID: ', docRef.id);
      toast.success('Form submitted successfully');
      localStorage.setItem('formSubmitted', 'true');  // Update local storage
      setIsSubmitted(true);
      onClose();
    } catch (error) {
      toast.error('Error submitting form');
      console.error('Error submitting form', error);
    }
  };

  if (isSubmitted) {
    return null;  // Do not render the form if it has already been submitted
  }

  return (
    <div className="top-box">
      <ToastContainer />
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
