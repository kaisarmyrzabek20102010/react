import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      do {theme === 'light' ? 'dark' : 'light'} color
    </button>
  );
};

export default ChildComponent;
