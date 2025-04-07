import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }
    
    sessionStorage.setItem('user', JSON.stringify({ email }));
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
