import React from "react";
import { Colors } from "../../utils/colors/colors";
import { IconAssets } from "../../utils/iconassets/images";
import "./UpperNavbar.css";

const textData = ["Private Sector", "Public Sector", "Partnerships"];
const imageWithTextData = [
  { text: "Register/sign in", img: IconAssets.user },
  { text: "Employee Support", img: IconAssets.msg },
];

const UpperNavbar = () => {
  return (
    <div
      className="upper_navbar"
      style={{
        "--base-color": Colors.base,
        "--white-color": Colors.white,
      }}
    >
      <div className="upper_navbar__section upper_navbar__text-section">
        {textData.map((item) => (
          <p key={item} className="upper_navbar__text">
            {item}
          </p>
        ))}
      </div>
      <div className="upper_navbar__empty-section"></div>
      <div className="upper_navbar__section upper_navbar__image-text-section">
        {imageWithTextData.map((item) => (
          <div key={item.text} className="upper_navbar__image_text_tem">
            <p className="upper_navbar__text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperNavbar;
