import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer__main">
        <div className="footer__main_1">
          <div className="footer__section">
            <div className="footer__heading">Diety</div>
            <div className="footer_phone">+1 (7635) 547-12-97</div>
            <div className="footer_email">support@lift.agency</div>
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
            <div className="footer_text">Company</div>
            <div className="footer_text">Lift Media</div>
          </div>
          <div className="footer__section">
            <div className="footer__heading_1">Subscribe</div>
            <div className="footer__subscribe">
              <input type="text" placeholder="Enter your email" />
              <button className="footer__button">Subscribe</button>
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
            A product of <span className="footer__heading_2">Diety</span>
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
