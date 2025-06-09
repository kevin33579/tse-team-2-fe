import React from "react";
import "./top_section.css";

export default function Top_section() {
  return (
    <div className="top-section">
      <img src="./top.png" alt="Driving lessons" className="top-image" />
      <div className="text-overlay">
        <h1 className="top-text">
          We provide driving lessons for various types of cars
        </h1>
        <p className="bottom-text">
          Professional staff who are ready to help you to become a much-needed
          reliable driver
        </p>
        <div className="bottom-info">
          <div className="info-block">
            <p className="info-number">50+</p>
            <p className="info-subtitle">
              A class ready to make you a reliable driver
            </p>
          </div>
          <div className="info-block">
            <p className="info-number">20+</p>
            <p className="info-subtitle">
              Professional workforce with great experience
            </p>
          </div>
          <div className="info-block">
            <p className="info-number">10+</p>
            <p className="info-subtitle">
              Cooperate with driver service partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
