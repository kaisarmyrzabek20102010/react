
import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // **REPLACE THIS WITH YOUR ACTUAL API CALL**
    const response = await fetch('AIzaSyBTCs40gvklrI2MSatl9MAa6uEk_MnRshc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setImageUrl(data.imageUrl);
  };

  return (
    <div>
      <h1>Draw with Gemini (Placeholder)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your drawing prompt:
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </label>
        <button type="submit">Draw!</button>
      </form>

      {imageUrl && (
        <img src={imageUrl} alt="Generated Image" />
      )}
    </div>
  );
}

export default App;

// https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=