import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* Left Text */}
        <div className="intro-left">
          <h2>where tradition meets innovation in every bite.E</h2>
          <p>
            Founded by a passionate husband-and-wife duo, Chutnée is London’s go-to for a bold and refreshing twist on South Asian street food. Our dishes are crafted from cherished family recipes using hand-picked ingredients, blending authentic flavours with Western finesse.
From signature chaii to inventive plates paired with our vibrant chutneys, every bite is made to surprise and comfort. More than a café, our House of Chaii is an experience—where rich teas, soulful food, and fusion delights bring the warmth of home to every dish
          </p>
          <div className="intro-buttons">
            <button className="btn primary">View Menu</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="intro-right">
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761407769/Union_paxyxd.png"
            alt="Chutnee Dish"
            className="main-image"
          />
          <div className="play-button">▶</div>
        </div>
      </div>
    </section>
  );
}
