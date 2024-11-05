import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import './css/ThemeSwitcher.css'; // Import the CSS file

const ThemeSwitcher = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isLightTheme) {
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
    }
    setIsLightTheme(!isLightTheme);
  };

  return (
    // <button className="theme-toggle-btn" onClick={toggleTheme}>
    //   {/* Toggle between the sun and moon icons */}
    //   {isLightTheme ? (
    //     <FaSun className="theme-icon" /> // Sun icon for light theme
    //   ) : (
    //     <FaMoon className="theme-icon" /> // Moon icon for dark theme
    //   )}
    // </button>
  <div className="theme-switcher">
    <label className="switch">
      <input 
        type="checkbox"
        checked={isLightTheme}
        onChange={toggleTheme}
      />
      <span className="slider">
        <FaSun className="theme-icon sun-icon" />
        <FaMoon className="theme-icon moon-icon" />
      </span>
    </label>
  </div>
  );
};

export default ThemeSwitcher;
