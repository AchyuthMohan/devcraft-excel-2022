import React from "react";
import "./Hero.css";
import hero from "../../assets/Landing/hero.svg";
import Stars from "../Stars/Stars";
function Hero() {
  return (
    <>
      <Stars>
        <div className="hero">
          <div className="hero__container__text">
            <div className="hero__container__text__title">Diety</div>
            <Stars>
            <div className="hero__container__text__subtitle">
              Our Diet Tracker makes it easy to monitor what you eat, when you
              eat it, and how much you consume. Get insights, identify patterns,
              and stay motivated towards a healthier you. Start crushing your
              goals one meal at a time!
            </div>
            </Stars>
            <div className="hero__container__text__button">Get Started</div>
          </div>
          <div className="hero__container__image">
            <img src={hero} alt="hero" />
          </div>
        </div>
        
      </Stars>
    </>
  );
}

export default Hero;
