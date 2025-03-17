// import { useState, useEffect } from "react";

// export default function add() {
//   const [color, setColor] = useState(() => {
//     return localStorage.getItem("color");
//   });

//   useEffect(() => {
//     localStorage.setItem("color", color);
//   }, []);

//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <h2>Түс таңда:</h2>
//       <button onClick={() => setColor("red")}>red</button>
//       <button onClick={() => setColor("blue")}>blue</button>
//       <button onClick={() => setColor("green")}> greean</button>
//     </div>
//   );
// }

//  import { useState, useEffect } from "react";
//  export default function Add() {
//    const [username, setUsername] = useState(
//      () => localStorage.getItem("username") || ""
//    );
//    useEffect(() => {
//      localStorage.setItem("username", username);
//    }, [username]);
//    return (
//      <div>
//        <h2>{username ? `hi ${username}   !` : "login"}</h2>
//        <input
//          type="text"
//          value={username}
//          onChange={(e) => setUsername(e.target.value)}
//          placeholder="text you name"
//        />
//        <button onClick={() => setUsername("")}>quit</button>
//      </div>
//    );
// //  }
// import { useState, useEffect } from "react";

// export default function Add() {
//   const [volume, setVolume] = useState(() => {
//     return localStorage.getItem("volume") || "50";
//   });

//   useEffect(() => {
//     localStorage.setItem("volume", volume);
//   }, [volume]);

//   return (
//     <div>
//       <h2>Дыбыс деңгейі: {volume} дб</h2>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={volume}
//         onChange={(e) => setVolume(e.target.value)}
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function add() {
  const [seconds, setSeconds] = useState(() => {
    return localStorage.getItem("seconds") || "";
  });

  useEffect(() => {
    const savedTime = localStorage.getItem("seconds");
    if (savedTime) {
      setSeconds(Number(savedTime));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("seconds", seconds);
  }, [seconds]);

  return (
    <div>
      <h2>Таймер: {seconds} сек</h2>
    </div>
  );
}
