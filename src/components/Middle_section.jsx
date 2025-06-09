import React from "react";
import "./middle_section.css";

const courses = [
  {
    id: 1,
    image: "./inova.png",
    type: "SUV",
    title: "Course SUV Kijang Innova",
    price: "IDR 700.000",
  },
  {
    id: 2,
    image: "./brio.png",
    type: "LCGC",
    title: "Course LCGC Honda Brio",
    price: "IDR 500.000",
  },
  {
    id: 3,
    image: "./palisade.png",
    type: "SUV",
    title: "Hyundai Palisade 2021",
    price: "IDR 800.000",
  },
  {
    id: 4,
    image: "./pajero.png",
    type: "SUV",
    title: "Course Mitsubishi Pajero",
    price: "IDR 800.000",
  },
  {
    id: 5,
    image: "./dump.png",
    type: "Truck",
    title: "Dump Truck for Mining Constructor",
    price: "IDR 1.200.000",
  },
  {
    id: 6,
    image: "./civic.png",
    type: "Sedan",
    title: "Sedan Honda Civic",
    price: "IDR 400.000",
  },
  {
    id: 2,
    image: "./brio.png",
    type: "LCGC",
    title: "Course LCGC Honda Brio",
    price: "IDR 500.000",
  },
  {
    id: 3,
    image: "./palisade.png",
    type: "SUV",
    title: "Hyundai Palisade 2021",
    price: "IDR 800.000",
  },

];

export default function Middle_section() {
  return (
    <>
      <div className="join-course-section">
        <h2 className="join-title">Join Course</h2>
        <div className="card-container">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={course.image}
                alt={course.title}
                className="card-image"
              />
              <p className="car-type">{course.type}</p>
              <p className="car-title">{course.title}</p>
              <p className="car-price">{course.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
