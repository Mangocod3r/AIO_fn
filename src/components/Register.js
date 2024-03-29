

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/register`, {
        name,
        password,
        email,
      });
      alert("Registration Successfull")
      console.log(response.data); // Success message or handle as needed
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Registration Failure")
        console.error('Registration failed:', error.response.data.message);
      } else {
        alert("Registration Failure")
        console.error('Registration failed:', error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-input"
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
        />
        <br />
        <br />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

