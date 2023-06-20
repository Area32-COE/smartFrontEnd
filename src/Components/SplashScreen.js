import React, { useEffect, useState } from 'react';
import './SplashScreen.css'; // CSS file for styling

const SplashScreen = () => {
    const [dissolve, setDissolve] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDissolve(true);
        setTimeout(() => {
          window.location.href = '/welcome';
        }, 3000); // Wait for 1 second after the dissolve effect
      }, 3000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);


  return (
    <div className="splash-screen">
      <div className="image-container">
        <img src=".../public/" alt="fig" className="centered-image" />
      </div>
      <h1 className="splash-text">SMARTFLEET</h1>
    </div>
  );
};

export default SplashScreen;
