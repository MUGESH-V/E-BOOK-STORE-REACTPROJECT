import React, { useState } from 'react';

const SettingsPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    console.log('User logged out');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>SETTINGS</h1>
      <div style={sectionStyle}>
        <h2>Email Settings</h2>
        <p>Manage your email preferences and security.</p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          style={inputStyle}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={inputStyle}
        />
      </div>
      <div style={sectionStyle}>
        <h2>Security</h2>
        <p>Enhance the security of your account.</p>
      </div>
      <button style={logoutButtonStyle} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
  color: '#333',
  backgroundImage: 'url("")', 
  backgroundSize: 'cover',
};

const headerStyle = {
  fontSize: '2em',
  textAlign: 'center',
  marginBottom: '20px',
};

const sectionStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  marginBottom: '15px',
};

const logoutButtonStyle = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'block',
  margin: 'auto',
};

export default SettingsPage;
