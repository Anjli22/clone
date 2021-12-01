import React from "react";
import "./Card.css";
import pic from './asset/pic.jpg';
const Card = () => {
  return (
    <div class="card">
      <div class="card-content">
        <h1>one page site</h1>
        <h2>lorem ispum is simple text</h2>
        <p>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit..."{" "}
        </p>
        <button class="btn">LEARN MORE</button>
      </div>
      <div>
        <img
          style={{ height: "300px", width: "300px" }}
          className="image"
          src={pic}
          alt="my pic"
        />
      </div>
    </div>
  );
};

export default Card;
