import React from "react";
import { imageData } from "../../../mockdata/ImageSlider";
import "./IconSlider.css";

const IconSlider = () => {
  return (
    <div className="icon-slider-container">
      <div className="icon-slider-content">
        {imageData.map((img, index) => (
          <div key={index} className="icon-slider-item">
            <img src={img} alt="slider Icon" className="icon-slider-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSlider;
