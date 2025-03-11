import { useState } from "react";

export default function UserInfo({ role, isPremium }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [temperature, setTemperature] = useState(20);

  // Map roles to display text
  const roleMapping = {
    admin: "Админ",
    user: "Қолданушы",
    guest: "Қонақ",
  };
  const roleText = roleMapping[role] || "Белгісіз";

  // Function to determine temperature text and color
  const getTemperatureInfo = (temp) => {
    if (temp > 40) return { text: "Өте ыстық", color: "text-red-600" };
    if (temp >= 30) return { text: "Ыстық", color: "text-orange-600" };
    if (temp >= 15) return { text: "Жылы", color: "text-yellow-600" };
    if (temp >= 0) return { text: "Суық", color: "text-cyan-600" };
    return { text: "Өте суық", color: "text-blue-600" };
  };

  const { text: tempText, color: tempColor } = getTemperatureInfo(temperature);
  const bgStyle = isPremium ? "bg-yellow-200" : "bg-gray-200";

  return (
    <div className={`p-4 rounded ${bgStyle}`}>
      {/* User Role */}
      <p className="text-lg font-semibold text-blue-600">{roleText}</p>

      {/* Temperature Display */}
      <p className={`text-xl font-bold ${tempColor}`}>{tempText}</p>

      {/* Subscription Button */}
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsSubscribed((prev) => !prev)}
      >
        {isSubscribed ? "Жазылымнан бас тарту" : "Жазылу"}
      </button>

      {/* Temperature Controls */}
      <div className="mt-2 flex gap-2">
        <button
          className="px-2 py-1 bg-gray-300 rounded"
          onClick={() => setTemperature((prev) => prev + 5)}
        >
          +5°
        </button>
        <button
          className="px-2 py-1 bg-gray-300 rounded"
          onClick={() => setTemperature((prev) => prev - 5)}
        >
          -5°
        </button>
      </div>
    </div>
  );
}
