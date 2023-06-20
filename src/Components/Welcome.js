import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="signup-page">
      <div className="image-section">
        <img src="/Users/yayrajoppa/test-run/public/images/fig1.png" alt="fig1" className="fig1" />
      </div>
      <div className="form-section">
        <img src="/Users/yayrajoppa/test-run/public/images/fig2.png" alt="fig" className="fig" />
        <h4>Hello, welcome</h4>
        <div>
        <button className="sign_in_btn">Sign In</button>
        </div>
        <p><p>
        <button className="login_btn">Login</button>
        </p></p>
      </div>
    </div>
  ); 
};

export default Welcome;
