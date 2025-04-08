import React, { useState, useRef } from "react";
import "./App.css";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { db, collection, addDoc } from "./firebaseConfig";
import Gemini from "./components/Gemini";
import emailjs from '@emailjs/browser';

const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const formRef = useRef<HTMLFormElement>(null); // add this line
  // Handle subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("❌ Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), { email });
      setStatus("✅ Subscribed successfully!");
      setEmail(""); // Clear input field after success
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("❌ Subscription failed. Try again.");
    }
  };

  const sendEmail = async (e:any) => {
    e.preventDefault();

    if (!formRef.current) return; // ✅ safely chec
    console.log(email);

    let formData = new FormData();
    formData.append('name', "filler");
    formData.append('email', email);

    emailjs.sendForm('service_kkdhmlb', 'template_yqxtmac', formRef.current, {publicKey: '3n8xXSvm4KPDChxv-',})
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  return (
    <div>
      <Header />
      <div className="background"></div>
      <div className="flood-image"></div>
      <div className="content-container">
        <div className="bg-white/80 w-full rounded-xl text-3xl p-3.5 backdrop-blur-xs">
          <p className="font-bold">DID YOU KNOW?</p>
          <p className="mt-7">
            Climate change causes&nbsp;
            <span className="font-bold text-[#ffc02d] bg-[#025E86] ">
              &nbsp;flooding&nbsp;
            </span>
            .
          </p>
          <p>
            Malaysians have lost&nbsp;
            <span className="font-bold text-[#ffc02d] bg-[#025E86]">
              &nbsp;RM933.4 million&nbsp;
            </span>{" "}
            to floods in 2024. <span className="italic">(DOSM, 2025)</span>
          </p>
        </div>
        <div className="content-box" id="about">
          <h2>Introduction</h2>
          <p>
            Climate change is a critical global issue that affects all aspects
            of life. Rising temperatures and unpredictable weather patterns
            threaten ecosystems, communities, and economies worldwide.
          </p>
        </div>
        <div
          className="bg-white/80 w-full rounded-xl text-3xl p-3.5 backdrop-blur-xs"
          id="facts"
        >
          <h2 className="font-bold">Climate Facts</h2>
          <div className="flex flex-row gap-x-7 px-10 mt-4">
            <div className="content-box h-60 shadow-2xl">
              <p className="flex flex-col gap-y-3">
                <span className="text-6xl">🌡</span>Annual global temperature increase: <strong>1.1°C</strong>
              </p>
            </div>
            <div className="content-box h-60 shadow-2xl">
              <p className="flex flex-col gap-y-3">
                <span className="text-6xl">💰</span>Estimated economic loss due to climate disasters:{" "}
                <strong>$200 billion/year</strong>
              </p>
            </div>
            <div className="content-box h-60 shadow-2xl">
              <p className="flex flex-col gap-y-3">
                <span className="text-6xl">🌊</span>Sea levels have risen by <strong>8 inches</strong> since
                1880.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box">
          <h2>Flood Area</h2>
          <Map />
        </div>
        <div className="bg-white/80 w-full rounded-xl text-3xl p-3.5 backdrop-blur-xs">
          <h2 className="font-bold mb-4">Footage of recent flood</h2>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="background-video"
          >
            <source src="/flood-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-10">
          <p className="font-semibold text-left">Want to get the latest update about climate action?</p>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="subscribe-btn" onClick={ (e) =>sendEmail(e)}>
              Subscribe to Us
            </button>
          </form>
           {/* ✅ Hidden form for EmailJS */}
          <form ref={formRef} style={{ display: "none" }}>
            <input type="hidden" name="email" value={email} />
            <input type="hidden" name="name" value="filler" />
          </form>
        </div>
        {status && <p className="status-message">{status}</p>}
        {/* <div className="chatbot">💬</div> */}
      </div>
      <Gemini />
      <Footer />
    </div>
  );
};

export default App;
