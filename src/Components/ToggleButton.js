import React, { useState } from 'react';
import classes from './ToggleButton.module.css'

function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic to toggle the dark/light mode theme in your application
  };

  return (
    <div className={`toggleSwitch ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
      <span className={classes.leftText}>Light</span>
      <label className={classes.switch}>
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
        <span className={classes.slider}></span>
      </label>
      <span className={classes.rightText}>Dark</span>
    </div>
  );
}

export default ToggleButton;