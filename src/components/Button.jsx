import React from "react";
import "./button.css";

export default function Button({ label, onClick, variant = "primary" }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
