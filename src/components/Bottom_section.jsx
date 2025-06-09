import React from "react";
import "./bottomSection.css";
const carTypes = [
  { id: 1, image: "./Electric.png", title: "Electric" },
  { id: 2, image: "./pajero.png", title: "SUV" },
  { id: 3, image: "./civic.png", title: "Sedan" },
  { id: 4, image: "./dump.png", title: "Truck" },
  { id: 5, image: "./brio.png", title: "Hatchback" },
  { id: 6, image: "./palisade.png", title: "Wagon" },
  
];

export default function Bottom_section() {
  return (
    <div className="more-car-section">
      <h2 className="more-title">More car type you can choose</h2>
      <div className="more-card-container">
        {carTypes.map((type) => (
          <div className="more-card" key={type.id}>
            <img
              src={type.image}
              alt={type.title}
              className="more-card-image"
            />
            <p className="more-card-title">{type.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
