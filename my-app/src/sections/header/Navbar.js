import React from "react";
import "./Navbar.css";
import { IconAssets } from "../../utils/iconassets/images";
import { NavbarItems } from "../../mockdata/NavbarItems";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={IconAssets.logo} alt="vivup_logo" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div className="menu">
            <ul>
              {NavbarItems.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className="button">
            <button>Business Demo Request</button>
          </div>
        </div>
        <div>
        <div className="sign_in_button">
            <button>Register / Sign in</button>
          </div>
          <div>
            <img src={IconAssets.close} style={{width:32,height:24}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
