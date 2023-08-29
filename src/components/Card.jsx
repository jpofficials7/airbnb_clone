import React from "react";
import KatieImage from "../images/katie-zaferes.png";
import StarImage from "../images/star.png";

export default function Card() {
  return (
    <>
      <div className="card">
        <img src={KatieImage} alt="katie" className="card--image" />
        <div className="card--stats">
          <img src={StarImage} alt="start" className="card-star" />
          <span>5.0</span>
          <span className="gray">(6).</span>
          <span className="gray">USA</span>
        </div>
        <p>Life Lessons with katie zaferas</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </>
  );
}
