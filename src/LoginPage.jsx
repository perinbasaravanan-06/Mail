import React from 'react';
import './LoginPage.css'; // Import custom CSS
import MAIL_ICON from '../Images/block.png';
import Google from '../Images/google.png';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img src={MAIL_ICON} alt="Mail Icon" className="mail-icon" />
          <div className="text-container">
            <h2>Mail blocking</h2>
            <h2>Unblocking</h2>
          </div>
        </div>
        <h1>Hi, Welcome Back</h1>
        <button className="google-sign-in">
          <img src={Google} alt="Google Icon" className="google-icon" />
          Sign in with Google
        </button>
        <p className="signin-instruction">Sign In With BITSathy Account</p>
      </div>
    </div>
  );
}

export default LoginPage;
