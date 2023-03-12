import React from "react";
import "./Hero.css";
import hero from "../../assets/Landing/hero.svg";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Hero() {
  const { signedInUser, signInWithGoogle, signOutOfGoogle, setSignedInUser } =
    React.useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <div className="hero__container__text">
          <div className="hero__container__text__title">Diety</div>
          <div className="hero__container__text__subtitle">
            Our Diet Tracker makes it easy to monitor what you eat, when you eat
            it, and how much you consume. Get insights, identify patterns, and
            stay motivated towards a healthier you. Start crushing your goals
            one meal at a time!
          </div>
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
        <div className="hero__container__image">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </>
  );
}

export default Hero;
