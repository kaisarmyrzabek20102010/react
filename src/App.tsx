import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  function changeColor() {
    setColor(color == "red" ? "white" : "red");
  }

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  const [inputValue,setInputValue] = useState("");
  function handlechange(e) {
    setInputValue(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
    }
  };


  return (
    <div style={{ color: color }}>
      <h1>{count}</h1>
      <button onClick={changeColor}>change color</button>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
      <button onClick={reset}>Reset</button>

      <input type="text" value={inputValue} onChange={handlechange} onKeyDown={handleKeyDown}/>
      <button>Submit</button>
    </div>
  );
}

export default App;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import "./App.css";
// import App from "./App";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );