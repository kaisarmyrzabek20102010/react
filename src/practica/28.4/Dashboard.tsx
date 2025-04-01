import { useParams, useNavigate } from "react-router-dom";

const Dashboard = ({ setIsAuthenticated }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    ______;
    ______;
  };

  return (
    <div>
      <h1>{userId === "admin" ? "Admin Panel" : "User Dashboard"}</h1>
      <p>Welcome, {userId}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
