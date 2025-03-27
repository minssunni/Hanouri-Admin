// File: src/pages/LoginPage.tsx

import React, { useState } from 'react';
import { userList } from '../draftUserList';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      const user = userList.find(user => user.username === username && user.password === password);
  
      if (user) {
        const navigate = useNavigate();
        navigate('/attendance');
      } else {
        setError('Invalid username and/or password. Please try again.');
      }
    };
  
    return (
      <div>
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  };
  
  export default LoginPage;
  