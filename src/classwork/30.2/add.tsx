import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ChildComponent from './ChildComponent';
import './style.css'; 

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
        <h1>theme: {theme}</h1>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
