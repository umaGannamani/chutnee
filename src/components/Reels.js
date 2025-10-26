import React from "react";
import "./Reels.css";

export default function Reels() {
  const reels = [
    "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761451419/Rectangle_21_teafa6.png",
    "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761451406/Rectangle_22_rasnqo.png",
    "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761451389/Rectangle_23_1_teciwi.png",
    "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761451371/Rectangle_24_mhy9lm.png",
  ];

  return (
    <section className="reels-section">
      <h3 className="section-title">WATCH OUR REELS</h3>
      <p className="section-subtitle">
        Get a taste of what everyone’s talking about. These are the Chutnée
        favorites our guests keep coming back for:
      </p>
      <div className="reels-row">
        {reels.map((url, idx) => (
          <div key={idx} className="reel-thumb">
            <img src={url} alt={`reel-${idx + 1}`} />
            <div className="play-button">
              <div className="play-icon">▶</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
