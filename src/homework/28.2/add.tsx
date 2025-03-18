import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: Your Name</p>
      <p>Email: your.email@example.com</p>
      <p>Academy: Your Academy Name</p>
      <button onClick={() => navigate("/projects")}>
        Go to My Projects
      </button>
    </div>
  );
}

function Project() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        <li><strong>Project 1:</strong> Description of project 1</li>
        <li><strong>Project 2:</strong> Description of project 2</li>
        <li><strong>Project 3:</strong> Description of project 3</li>
      </ul>
      <button onClick={() => navigate("/about")}>
        Go to About Me
      </button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About Me</h2>
      <p>Brief information about yourself.</p>
      <button onClick={() => navigate("/profile")}>
        Go to My Profile
      </button>
    </div>
  );
}

function Navigation() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
      <Link to="/profile">My Profile</Link>
      <Link to="/projects">My Projects</Link>
      <Link to="/about">About Me</Link>
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  navigate("/about");
  return null;
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;