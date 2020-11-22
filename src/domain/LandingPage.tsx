import React from "react";
import Button from "../components/Button/Button";
import TextField from "../components/TextField";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./LandingPage.scss";

const LandingPage: React.FC = () => {
  return (
    <div className="landingPage">
      <NavBar />
      <div className="content">
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
