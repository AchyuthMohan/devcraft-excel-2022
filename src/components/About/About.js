import React from "react";
import "./About.css";
import logo from "../../../src/assets/Landing/logo.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="about__left" data-aos="fade-up">
          <div className="about__left__title">
            Join the Future of Knowledge-Sharing with StackChain
          </div>
          <div className="about__left__subtitle">
            StackChain is a modern platform that connects individuals and
            experts in a decentralized ecosystem for collaborative learning. Our
            secure and transparent network promotes diversity, inclusivity, and
            innovation by allowing users to share and access knowledge openly.
            Join us to experience the future of knowledge-sharing!
          </div>
          <div className="about__left__buttons">
            <div className='about__left__button'>Get Started</div>
            <div className='about__left__button'>Learn More</div>
          </div>
        </div>
        <div className='about__right' data-aos="fade-up">
          <div className='about__right__image'>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
