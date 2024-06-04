import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/register', { email, password });
      localStorage.setItem('token', response.data.token); // Securely store token
      // Navigate to login or display success message
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Registration form fields */}
      {email}
      {error && <div className="error-message">{error}</div>}
      <input  name='Email' onChange={(e)=> setEmail(e.target.value)}/>
      <input  name='Password' onChange={(e)=> setPassword(e.target.value)}/>
      <input  name='ConfirmPassword' onChange={(e)=> setConfirmPassword(e.target.value)}/>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
