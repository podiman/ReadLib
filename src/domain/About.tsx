import React from "react";
import TextField from "../components/TextField/TextField";
import AboutPic from "../assets/bookpage.jpg";
import Code from "../assets/code.jpg";
import Email from "../icons/socialMedia/message.svg";
import Linkedin from "../icons/socialMedia/linkedin.svg";
import Github from "../icons/socialMedia/github.svg";
import reactLogo from "../icons/technology/react.svg";
import reduxLogo from "../icons/technology/redux.svg";
import scssLogo from "../icons/technology/sass-1.svg";
import googleDevLogo from "../icons/technology/google-developers.svg";
import "./About.scss";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="content">
        <div className="aboutReadLib">
          <div className="aboutText">
            <TextField text="About ReadLib" classname="heading" />
            <p className="aboutText-paragraph">
              ReadLib is a fictional organization that provides book lovers a
              online journal book to keep track, rate and review the books they
              read.
            </p>
            <p className="aboutText-paragraph">
              It also has the functionality to keep a list of books the reader
              want to read in the future providing an online space to keep track
              of them.
            </p>
            <p className="aboutText-paragraph">This site is built on</p>
            <div className="aboutText-techStack">
              <div>
                <img className="logo" src={reactLogo} alt="React" />
                <p className="aboutText-techStack__text">React</p>
              </div>
              <div>
                <img className="logo" src={reduxLogo} alt="Redux" />
                <p className="aboutText-techStack__text">Redux</p>
              </div>
              <div>
                <img className="logo" src={scssLogo} alt="SCSS" />
                <p className="aboutText-techStack__text">SASS</p>
              </div>
              <div>
                <img
                  className="logo-google"
                  src={googleDevLogo}
                  alt="GoogleDev"
                />
                <p className="aboutText-techStack__text">Google Books API</p>
              </div>
            </div>
            <div>
              <p className="aboutText-github">
                Want to see the code? Check out this project on my Github
              </p>
              <div className="social-media-icon">
                <a
                  className="social-media-icon__Github"
                  href="https://github.com/podiman/ReadLib"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="social-media-icon__Image"
                    src={Github}
                    alt="https://github.com/podiman/ReadLib"
                  />
                  <span className="social-media-icon__Text">
                    ReadLib
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="aboutImage">
            <img src={AboutPic} alt="About page pic" />
          </div>
        </div>
        <div className="aboutReadLib">
          <div className="aboutImage">
            <img src={Code} alt="Code Pic" />
          </div>
          <div className="aboutText">
            <TextField text="About the Creator" classname="heading" />
            <TextField text="Mayura Wijeyaratne" classname="heading2" />
            <p className="aboutText-paragraph">
              Over 10 years of software industry experience working on front-end
              and backend development. Expert in Angular, TypeScript and Java.
              Very good communicator and a collaborator.
            </p>
            <p className="aboutText-paragraph">Get in touch</p>
            <div className="social-media-icon">
              <a
                className="social-media-icon__Email"
                href="mailto:mayura.wijeya@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-media-icon__Image"
                  src={Email}
                  alt="mayura.wijeya@gmail.com"
                />
                <span className="social-media-icon__Text">
                  mayura.wijeya@gmail.com
                </span>
              </a>
            </div>
            <div className="social-media-icon">
              <a
                className="social-media-icon__Linkedin"
                href="https://www.linkedin.com/in/mayura-wijeyaratne/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-media-icon__Image"
                  src={Linkedin}
                  alt="https://www.linkedin.com/in/mayura-wijeyaratne/"
                />
                <span className="social-media-icon__Text">
                  Mayura-Wijeyaratne
                </span>
              </a>
            </div>
            <div className="social-media-icon">
              <a
                className="social-media-icon__Github"
                href="https://github.com/podiman"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-media-icon__Image"
                  src={Github}
                  alt="https://github.com/podiman"
                />
                <span className="social-media-icon__Text">
                  Mayura Wijeyaratne
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
