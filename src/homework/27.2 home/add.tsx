import { useState } from "react";

export default function UserInfo({ role, isPremium }) {
  const [isSubscribed, setIsSubs] = useState(false);
  const [temperature, setTemperature] = useState(20);

  // Role Mapping
  const roleMapping = {
    admin: "Админ",
    user: "Қолданушы",
    guest: "Қонақ",
  };
  const roleText = roleMapping[role] || "admin";

  // Function to get temperature text and color
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
      <p>{roleText}</p>

      <p>
        {temperature}°C - {tempText}
      </p>

      <button onClick={() => setIsSubs((prev) => !prev)}>
        {isSubscribed ? "Жазылымнан бас тарту" : "Жазылу"}
      </button>

      <div>
        <button onClick={() => setTemperature((prev) => prev + 5)}>+5°</button>
        <button onClick={() => setTemperature((prev) => prev - 5)}>-5°</button>
      </div>
    </div>
  );
}
