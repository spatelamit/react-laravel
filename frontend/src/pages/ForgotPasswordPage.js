import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/forgot-password', { email });
      // Display success message or instructions
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send reset link');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email input field */}
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default PasswordReset;
