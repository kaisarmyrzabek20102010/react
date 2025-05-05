<<<<<<< HEAD
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
=======
export default function CarListing() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-xl mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Toyota Camry 2023 г.</h1>
          <p className="text-2xl text-red-600 font-semibold">17 400 000 ₸</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Рассчитать Кредит</button>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <div><strong>city:</strong> almaty</div>
            <div><strong>probeg:</strong> 62 000 km</div>
            <div><strong>kuzov:</strong> sedan</div>
            <div><strong>privod:</strong> front</div>
            <div><strong>obiem:</strong> 2.5 (gas)</div>
            <div><strong>rul:</strong> left</div>
            <div><strong>korobka:</strong> avtomat</div>
            <div><strong>color:</strong> white metal</div>
            <div><strong>rastomojen:</strong> yes</div>
          </div>

          <p className="text-gray-800 mt-2"><strong>coment:</strong> vtoroi xozaiyn.mashina dilerskaya.nikakix povrejdenui.</p>
        </div>

        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Toyota Camry"
            className="rounded-lg w-full h-auto object-cover"
          />
          <div className="flex gap-2 mt-2">
            <img src="https://via.placeholder.com/80" className="rounded" alt="thumb1" />
            <img src="https://via.placeholder.com/80" className="rounded" alt="thumb2" />
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> ddfd0d9a4117fc1588896010e20911a095dbcd4d
