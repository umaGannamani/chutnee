import React from "react";
import "./HeroCollage.css";

export default function HeroCollage() {
  return (
    <section
      className="hero-collage"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761403967/Rectangle_23_kyf11c.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Logo + Navigation */}
      <div className="hero-top container">
        <div className="hero-logo">
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761403726/Chutnee-logo-2-2048x1310_1_3_qbbx8x.png"
            alt="ChutNee Logo 1"
            className="logo-img"
          />
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761403684/Chutnee-logo-2-2048x1310_2_3_jyoya5.png"
            alt="ChutNee Logo 2"
            className="logo-img"
          />
        </div>
        <nav className="hero-nav">
          <a href="#ourstory" className="nav-link">Our Story</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#afternoon-tea" className="nav-link">Afternoon Tea</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#chutnee-family" className="nav-link">Chutnee Family</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#reservation" className="nav-link reservation-btn">Reservation</a>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="hero-content container">
        <div className="hero-left">
          <h1 className="hero-title">WELCOME TO CHUTNEE</h1>
          <p className="hero-sub">
            Where tradition meets innovation in every bite
          </p>
          <div className="hero-ctas">
            <button className="btn primary">View Menu</button>
            <button className="btn secondary">Book Table</button>
          </div>
        </div>
      </div>
    </section>
  );
}
