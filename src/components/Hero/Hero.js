import React from "react";
import hero from "../../../src/assets/Landing/hero.svg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__left" data-aos="fade-up">
          <div className="hero__left__title">StackChain</div>
          <div className="hero__left__subtitle">
            Decentralize knowledge, empower communities.
          </div>
          <div className="hero__left__buttons">
            <div className="hero__left__button">Get Started</div>
            <div className='hero__left__button'>Learn More</div>
          </div>
        </div>
        <div className='hero__right' data-aos="fade-up">
          <div className='hero__right__image'>
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
