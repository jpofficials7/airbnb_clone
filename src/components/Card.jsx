import React from "react";
import StarImage from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img
          src={require(`../images/katie-zaferes.png`)}
          alt="katie"
          className="card--image"
        />
        <div className="card--stats">
          <img src={StarImage} alt="start" className="card-star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}).</span>
          <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </>
  );
}
