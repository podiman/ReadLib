import React from "react";
import TextField from "../components/TextField/TextField";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "./LandingPage.scss";
import trackRead from "../icons/trackRead.svg";
import writeReview from "../icons/writeReview.svg";
import giveRating from "../icons/giveRating.svg";

const LandingPage: React.FC = () => {
  return (
    <div className="landingPage">
      {/* <NavBar /> */}
      <div className="content">
        <div className="quote">
          <TextField
            text="Reading maketh a full man; conference a ready man; and writing an exact man."
            classname="quote"
          />
          <TextField text="Francis Bacon" classname="quoteAuthor" />
        </div>
        <div className="activities">
          <div className="activity">
            <img src={trackRead} alt="Track Read" />
            <TextField text="Track what you read" classname="normal" />
          </div>
          <div className="activity">
            <img src={giveRating} alt="Give Rating" />
            <TextField text="Give your rating" classname="normal" />
          </div>
          <div className="activity">
            <img src={writeReview} alt="Write Review" />
            <TextField text="Write a review" classname="normal" />
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default LandingPage;
