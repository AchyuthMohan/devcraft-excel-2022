import React, { useEffect } from "react";
import "./Hero.css";
import hero from "../../assets/Landing/hero.svg";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

import Stars from "../Stars/Stars";
import Aos from "aos";
function Hero() {
  const { signedInUser, signInWithGoogle, signOutOfGoogle, setSignedInUser } =
    React.useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <Stars>
        <div className="hero">
          <div className="hero__container__text">
            <div className="hero__container__text__title" data-aso="zoom-in">Diety</div>
            <Stars>
              <div className="hero__container__text__subtitle">
                Our Diet Tracker makes it easy to monitor what you eat, when you
                eat it, and how much you consume. Get insights, identify
                patterns, and stay motivated towards a healthier you. Start
                crushing your goals one meal at a time!
              </div>
            </Stars>
            <div
              className="hero__container__text__button"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                if (signedInUser) {
                  navigate("/diet");
                } else {
                  signInWithGoogle();
                }
              }}
            >
              {signedInUser ? "View Dashboard" : " Get Started"}
            </div>
          </div>
          <div className="hero__container__image"data-aos="fade-in">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </Stars>
    </>
  );
}

export default Hero;
