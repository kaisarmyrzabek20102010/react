import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleRegister = () => {
    if (name.trim() && email.trim() && password.trim()) {
      const newUser = { name, email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert("baryn toltyr");
    }
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.email === email && parsedUser.password === password) {
        setUser(parsedUser);
        setEmail("");
        setPassword("");
      } else {
        alert("qate email");
      }
    } else {
      alert("tabylmady");
    }
  };

  const handleGuestLogin = () => {
    setUser({ name: "Guest" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Hello, {user.name}!</h2>
          <button onClick={handleLogout}>Log Out</button>
          {user.name !== "Guest" && (
            <button onClick={handleDeleteAccount}>Delete Account</button>
          )}
        </div>
      ) : (
        <div>
          <h1>{isLogin ? "kiry" : "Login"}</h1>
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLogin ? (
            <button onClick={handleLogin}>kiry</button>
          ) : (
            <button onClick={handleRegister}>login</button>
          )}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "loginga ayusy" : " kiryge aayusy"}
          </button>
          <button onClick={handleGuestLogin}>Login as Guest</button>
        </div>
      )}
    </div>
  );
};

export default App;