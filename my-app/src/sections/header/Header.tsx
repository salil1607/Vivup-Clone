import React from "react";
import "./styles.css";
import Image from "../../components/image";
import { IconAssets } from "../../utils/iconassets/images";
import TextIcon from "../../components/custom/texticon";
const Header = () => {
  return (
    <div className="container">
      <div className="containerLeft">
        <Image
          source={
            window.innerWidth < 768 ? IconAssets.logo : IconAssets.WebLogo
          }
          alt="logo"
          className="logo"
        />
      </div>
      <div className="containerCenter"></div>
      <div className="containerRight">
        <TextIcon
          source={IconAssets.user}
          alt="user"
          text="Register"
          textStyle={{ marginLeft: 10 }}
        />
      </div>
    </div>
  );
};

export default Header;
