import React, { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('Қазақша');
  const [text, setText] = useState('choose language');

  const translations = {
    Қазақша: 'Сәлеметсіз бе',
    English: 'Hello',
    Русский: 'Здравствуйте',
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setText(translations[selectedLanguage]);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div>
        <p style={{ fontStyle: 'italic', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
          {text}
        </p>
        <select value={language} onChange={handleLanguageChange}>
          <option value="Қазақша">Қазақша</option>
          <option value="English">English</option>
          <option value="Русский">Русский</option>
        </select>
      </div>
    </div>
  );
};
export default App;
