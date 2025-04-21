import React from "react";
import { IconAssets } from "../../../utils/iconassets/images";
import ButtonComponent from "../../../components/ButtonComponent";
import { SecondSectiondata } from "../../../mockdata/SecondSectionData";
import "./SecondSection.css";

const SecondSection = () => {
  return (
    <>
      <div className="section">
        <div className="imageContainer">
          <img
            src={IconAssets.women}
            alt="women raising hand"
            className="image"
          />
        </div>
        <div className="textContainer">
          <h1 className="heading">Benefits for your Business</h1>
          <p className="paragraph">
            Adopt an all-in-one employee benefits platform that can help to:
          </p>
          <div>
            {SecondSectiondata.map((text, index) => (
              <p key={index}>
                <span>
                  <img
                    src={IconAssets.tick}
                    alt="green tick"
                    className="tickIcon"
                  />
                </span>
                &nbsp; &nbsp; &nbsp;<span>{text}</span>
              </p>
            ))}
          </div>
          <ButtonComponent text="How We Can Help" className="buttonMargin" />
        </div>
      </div>
      <div className="section">
        <div className="textContainerNoMargin">
          <h1 className="heading">Benefits for your People</h1>
          <div>
            {SecondSectiondata.map((text, index) => (
              <p key={index}>
                <span>
                  <img
                    src={IconAssets.tick}
                    alt="green tick"
                    className="tickIcon"
                  />
                </span>
                &nbsp; &nbsp; &nbsp;<span>{text}</span>
              </p>
            ))}
          </div>
          <ButtonComponent text="Explore Benefits" className="buttonMargin" />
        </div>
        <div className="imageContainer">
          <img
            src={IconAssets.Relax}
            alt="Relax at work"
            className="image"
          />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
