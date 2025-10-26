import React from "react";
import "./Reserve.css";

export default function Reserve() {
  return (
    <section className="reserve-section">
      <div className="reserve-content">
        <div className="reserve-left">
          <h3>RESERVE YOUR TABLE AT CHUTNÉE</h3>
          <p>
            Bright spaces, cosy seats — book a table and enjoy our special menu.
          </p>
          <button className="reserve-btn">Reserve</button>
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
