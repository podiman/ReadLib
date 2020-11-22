import React from "react";
import Button from "../Button/Button";
import "./styles.scss";
import Logo from "../../icons/Logo.svg";

const NavBar: React.FC = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>        
        <h1>ReadLib</h1>
      </div>
      <Button text="Login" landingPage={true} />
    </div>
  );
};

export default NavBar;
