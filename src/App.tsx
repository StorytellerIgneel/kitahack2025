import React from "react";
import "./App.css";
import Map from "./components/Map";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <div className="container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/flood-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="content-container">
        <div className="content-box" id="about">
        <h2>Introduction</h2>
        <p>Climate change is a critical global issue that affects all aspects of life. Rising temperatures and unpredictable weather patterns threaten ecosystems, communities, and economies worldwide.</p>
        </div>
        <div className="content-box" id="facts">
          <h2>Climate Facts</h2>
          <p>🌡 Annual global temperature increase: <strong>1.1°C</strong></p>
          <p>💰 Estimated economic loss due to climate disasters: <strong>$200 billion/year</strong></p>
          <p>🌊 Sea levels have risen by <strong>8 inches</strong> since 1880.</p>
        </div>
        <h1>Flood Area</h1>
        <Map />
        <button className="subscribe-btn" id="subscribe">Subscribe to Us</button>
        <div className="chatbot">💬</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
