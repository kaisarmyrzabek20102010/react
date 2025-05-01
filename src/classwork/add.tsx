import React, { useState } from "react";
import axios from "axios";

const TextToImage = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError("Введите запрос.");
      return;
    }

    setLoading(true);
    setError(null);
    setImageUrl("");

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: input,
          n: 1,
          size: "512x512",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer AIzaSyBTCs40gvklrI2MSatl9MAa6uEk_MnRshc`, // Replace YOUR_API_KEY with your actual API key
          },
        }
      );

      const url = res.data.data?.[0]?.url;
      if (url) {
        setImageUrl(url);
      } else {
        setError("Не удалось получить изображение.");
      }
    } catch (err) {
      console.error(err);
      setError("Ошибка при генерации изображения.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Генерация Изображения по Тексту</h2>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Опишите, что нарисовать"
        style={{ width: "300px", padding: "8px" }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        {loading ? "Генерация..." : "Создать изображение"}
      </button>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {imageUrl && (
        <div style={{ marginTop: "1.5rem" }}>
          <h3>Результат:</h3>
          <img
            src={imageUrl}
            alt="Generated"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
};

export default TextToImage;
// https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBTCs40gvklrI2MSatl9MAa6uEk_MnRshc
