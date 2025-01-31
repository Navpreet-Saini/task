import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Assuming you have the styles defined

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Our Car Service</h1>
      <p>Join us to get access to exclusive car listings and more.</p>
      <button className="get-started-button" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
