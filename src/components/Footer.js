import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* 🔸 Logo Section */}
        <div className="footer-logo">
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761403726/Chutnee-logo-2-2048x1310_1_3_qbbx8x.png"
            alt="ChutNee Logo 1"
            className="footer-img"
          />
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761403684/Chutnee-logo-2-2048x1310_2_3_jyoya5.png"
            alt="ChutNee Logo 2"
            className="footer-img"
          />
        </div>

        {/* 🔸 Navigation Links */}
        <div className="footer-links">
          <a href="/our-story">Our Story</a>
          <a href="/menu">Menu</a>
          <a href="/afternoon-tea">Afternoon Tea</a>
          <a href="/events">Events</a>
          <a href="/chutnee-family">Chutnee Family</a>
          <a href="/contact">Contact</a>
        </div>

        {/* 🔸 Address Section */}
        <div className="footer-address">
          <p>124 The Broadway, Southall, London, UB1 1QF</p>
          <p>02085711688</p>

          {/* 🔸 Social Icons */}
          <div className="footer-socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
              />
            </a>
          </div>
        </div>

        {/* 🔸 Divider */}
        <hr className="footer-line" />

        {/* 🔸 Copyright */}
        <div className="footer-bottom">
          <p>
            Copyright 2024 © All Right Reserved. Developed By{" "}
            <span className="highlight">Foood.ai</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
