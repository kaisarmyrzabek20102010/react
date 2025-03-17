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
      alert("Please fill in all fields.");
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
        alert("Invalid email or password.");
      }
    } else {
      alert("No user found. Please register first.");
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
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      {user ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "#4CAF50" }}>Hi, {user.name}!</h2>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              margin: "10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            delete account
          </button>
          {user.name !== "Guest" && (
            <button
              onClick={handleDeleteAccount}
              style={{
                padding: "10px 20px",
                margin: "10px",
                backgroundColor: "#ff9800",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete Account
            </button>
          )}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#2196F3" }}>{isLogin ? "Login" : "Register"}</h1>
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "10px",
                margin: "10px 0",
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          )}
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          {isLogin ? (
            <button
              onClick={handleLogin}
              style={{
                padding: "10px 20px",
                margin: "10px",
                backgroundColor: "#9E9E9E",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleRegister}
              style={{
                padding: "10px 20px",
                margin: "10px",
                backgroundColor: "#9E9E9E",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          )}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              padding: "10px 20px",
              margin: "10px",
              backgroundColor: "#9E9E9E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Registerga ayusy" : "Loginga ayusy"}
          </button>
          <button
            onClick={handleGuestLogin}
            style={{
              padding: "10px 20px",
              margin: "10px",
              backgroundColor: "#9E9E9E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login Guest
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
