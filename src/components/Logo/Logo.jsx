import React from "react";
import Style from "./Logo.module.css";
import LogoSrc from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className={`${Style.logo}`}>
      <img src={LogoSrc} alt="Brain Navigator Logo" />
    </div>
  );
};

export default Logo;
