import React, { useState } from "react";
import Button from "../Button/Button";
import "./styles.scss";
import Logo from "../../icons/Logo.svg";
import DropDown from "../DropDown/DropDown";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const NavBar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const items = [
    {
      id: "1",
      value: "fantasy",
    },
    {
      id: "2",
      value: "technology",
    },
  ];

  return (
    <div className="navigation">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <h1>ReadLib</h1>
      </div>
      <div className="navigation__links">
        <div className="dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className="dropdown__links">
            Browse <ArrowDropDownIcon />
            {dropdown && <DropDown />}
          </div>
        </div>
        <Button text="Login" landingPage={true} />
      </div>
    </div>
  );
};

export default NavBar;
