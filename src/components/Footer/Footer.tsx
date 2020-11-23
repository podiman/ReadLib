import React from "react";
import twitter from "../../icons/socialMedia/twitter.svg";
import facebook from "../../icons/socialMedia/facebook.svg";
import instagram from "../../icons/socialMedia/instagram.svg";
import { Link } from "react-router-dom";
import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      {/* <TextField text="About" /> */}
      <div className="aboutus">
        <Link to="/about" className="link">
          <h1>About</h1>
        </Link>
      </div>
      <div className="contactus">
        <h1>Connect</h1>
        <a href="https://twitter.com/torontolibrary" target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.facebook.com/torontopubliclibrary" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/torontolibrary/" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
