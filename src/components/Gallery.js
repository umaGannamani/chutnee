import React from "react";
import "./Gallery.css";

const pics = [
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761451419/Rectangle_21_teafa6.png",
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761449861/Rectangle_26_ehi5x2.png",
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761451389/Rectangle_23_1_teciwi.png",
  "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761451371/Rectangle_24_mhy9lm.png",
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h3 className="section-title center">OUR GALLERY</h3>
      <div className="gallery-row">
        {pics.map((url, idx) => (
          <div key={idx} className="gallery-item">
            <img src={url} alt={`gallery-${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
