import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMusic } from "react-icons/fa";
import "./Dashboard.css";
import MusicRecommendations from "./MusicRecommendations";


const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-box">
          <h3>Loading your profile...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>
          <FaMusic /> Welcome, {user.name}!
        </h2>
        <p>Email: {user.email}</p>
        <p>Ready to explore some personalized music recommendations?</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <MusicRecommendations />

    </div>
  );
};

export default Dashboard;
