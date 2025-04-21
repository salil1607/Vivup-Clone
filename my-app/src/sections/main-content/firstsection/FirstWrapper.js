import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IconAssets } from "../../../utils/iconassets/images";
import "./FirstWrapper.css";
import ButtonComponent from "../../../components/ButtonComponent";

const FirstWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    console.log(isLoggedIn, "FirstWrapper");
  }, []);
  useCallback(() => {
    console.log(isLoggedIn, "FirstWrapper");
  }, [isLoggedIn]);
  useMemo(() => {
    console.log(isLoggedIn, "FirstWrapper");
  }, [isLoggedIn]);
  return (
    <div className="first-wrapper-container">
      <div className="first-wrapper-content">
        <h1>Where Employee Benefits Mean More</h1>
        <p>
          Help connect your workforce, boost wellbeing, and unlock your people’s
          true potential with a comprehensive employee benefits platform
        </p>
        <img src={IconAssets.award2022} alt="award" className="award-image" />
        <div className="button-wrapper">
          <button>Business Demo Request &#x203A;</button>
        </div>
        <div className="login-text">
          Does your employer use vivup? Log in here &#x203A;
        </div>
      </div>
      <div className="image-wrapper">
        <img
          src={IconAssets.vivup_circle}
          alt="vivup"
          className="vivup-image"
        />
      </div>
    </div>
  );
};

export default FirstWrapper;
