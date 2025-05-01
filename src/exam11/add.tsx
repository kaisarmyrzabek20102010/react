import React, { useState } from "react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const askGemini = async (userInput) => {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyASYNyRFNHABgB549RuvtbGQ9QpnDc64H0`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userInput }] }],
        }),
      }
    );

    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Жауап алынбады";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);

    const answer = await askGemini(question);
    setHistory([{ question, answer }, ...history]);
    setQuestion("");
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Gemini</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          className="w-full border px-3 py-2"
          placeholder="Сұрағыңызды жазыңыз..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2"
          disabled={loading}
        >
          {loading ? "Күтіңіз..." : "Жіберу"}
        </button>
      </form>

      <div className="space-y-6">
        <p>jayabi:</p>
        {history.map((item, index) => (
          <div key={index} className=" bg-gray-100 p-4 rounded">
            <p className="text-gray-700">
              {" "}
              {index + 1}.{item.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <p>suraq:</p>
        {history.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="border p-4 rounded bg-blue-100">
              <p className="font-semibold">
                {index + 1}.{item.question}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
