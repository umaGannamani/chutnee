import React from "react";
import "./Reserve.css";

export default function Reserve() {
  return (
    <section className="reserve-section">
      <div className="reserve-content">
        <div className="reserve-left">
          <h3>RESERVE YOUR TABLE AT CHUTNÉE</h3>
          <p>
            Whether you're planning a cozy breakfast, a family dinner, or a stylish catch-up with friends — we’ve got the perfect seat waiting for you.
          </p>
          <button className="reserve-btn">Book a Table</button>
        </div>

        <div className="reserve-center">
          <div className="reserve-play-wrapper">
            <img
              src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761447460/Vector_6_d8qlmy.png"
              alt="Play Button"
              className="reserve-play"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
