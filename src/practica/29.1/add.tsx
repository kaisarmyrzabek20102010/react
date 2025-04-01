import { use, useState } from "react";

export default function Login() {
  const [isUsername, setIsUsername] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [error, setError] = useState("");

  function SetUp(e) {
    e.preventDefault();

    if (!isEmail.includes("@")) {
      setError('Email-da "@" bolsyn');
      return;
    } 

    if (isPassword.length <= 6) {
      setError(" parol 6 dan az bolu kerek");
      return;
    } 

    if (isUsername.length > 8 || isUsername.length < 3) {
      setError("esim 3-8 arip boly kerek");
      return;
    } 

    const sandar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (let of of isUsername) {
      if (sandar.includes(of)) {
        setError("esimde sandar bolu kerek emes");
        return;
      }
    }

    setError("");
    alert("sen kirdin!");


    localStorage.setItem("username", isUsername);
    localStorage.setItem("password", isPassword);
    localStorage.setItem("email", isEmail);
  }

  return (
    <form onSubmit={SetUp}>
      <input
        type="text"
        value={isEmail}
        onChange={(e) => setIsEmail(e.target.value)}
        placeholder="email jaz"
      />
      <input
        type="password"
        value={isPassword}
        onChange={(e) => setIsPassword(e.target.value)}
        placeholder="password jaz"
      />
      <input type="text" val/>
      <input
        type="text"
        value={isUsername}
        onChange={(e) => setIsUsername(e.target.value)}
        placeholder="username jaz"
      />
      <button>Join</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

function Kiry() {
  const [isPassword, setIsPassword] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.getItem("username") &&
      setIsUsername(localStorage.getItem("username"));
    localStorage.getItem("password") &&
      setIsPassword(localStorage.getItem("password"));
    localStorage.getItem("email") &&
    
  }, [])

  function SetUp(e) {
    e.preventDefault();

    if (!isEmail.includes("@")) {
      setError('Email-da "@" bolsyn');
      return;
    } 

    if (isPassword.length <= 6) {
      setError(" parol 6 dan az bolu kerek");
      return;
    } 

    if (isUsername.length > 8 || isUsername.length < 3) {
      setError("esim 3-8 arip boly kerek");
      return;
    } 

    

    setError("");
    alert("Hello!");

  }

  return (
    <form onSubmit={SetUp}>
      <input
        type="text"
        value={isEmail}
        onChange={(e) => setIsEmail(e.target.value)}
        placeholder="email jaz"
      />
      <input
        type="password"
        value={isPassword}
        onChange={(e) => setIsPassword(e.target.value)}
        placeholder="password jaz"
      />
     
      <button>Join</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
