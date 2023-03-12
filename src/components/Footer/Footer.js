import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="footer__main">
        <div className="footer__main_1">
          <div className="footer__section">
            <div
              className="footer__heading"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <div>
                <img src={logo} alt="" width={80} height={80} />
              </div>
              <div>Diety</div>
            </div>
            <div className="footer_phone">+1 (7635) 547-12-97</div>
            <div className="footer_email">excelmec.org</div>
          </div>
          <div className="footer__section">
            <div className="footer__heading_1">Quick Links</div>
            <div className="footer_text">Product</div>
            <div className="footer_text">Information</div>
          </div>
          <div
            className="footer__section"
            style={{
              paddingTop: "2rem",
            }}
          >
            <div className="footer_text">Amigos</div>
            <div className="footer_text">Instagram</div>
          </div>
          <div className="footer__section">
            <div className="footer__heading_1">LinkedIn</div>
            <div className="footer__subscribe">
              <input type="text" placeholder="Enter your email" />
              <button className="footer__button">Submit</button>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "2rem",
              marginBottom: "2rem",
              height: "1px",
              backgroundColor: "white",
            }}
          ></div>
        </div>
        <div className="footer__section_1">
          <div className="footer__section_1-icons">
            <div className="footer__icon_wrapper">
              <FaLinkedinIn className="footer__icon" />
            </div>
            <div className="footer__icon_wrapper">
              <FaFacebookF className="footer__icon" />
            </div>
            <div className="footer__icon_wrapper">
              <FaTwitter className="footer__icon" />
            </div>
          </div>
          <div className="footer__section_1_content">
            A product of <span className="footer__heading_2">Amigos</span>
          </div>
          <div className="footer__section_1_content">
            © 2023 All rights reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
