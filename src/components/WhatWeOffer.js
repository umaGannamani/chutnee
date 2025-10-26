import React from "react";
import "./WhatWeOffer.css";

const items = [
  {
    title: "Breakfast",
    icon: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411622/1_25_fe7bys.png",
  },
  {
    title: "Street Food",
    icon: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411708/z_1_n8bdgo.png",
  },
  {
    title: "Desserts",
    icon: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411788/3_1_cd0vuv.png",
  },
  {
    title: "Chaii",
    icon: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411847/1_25_1_a1quoz.png",
  },
  {
    title: "Hot Drinks",
    icon: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411905/1_25_2_gveoau.png",
  },
  {
    title: "Cold Drinks",
    icon: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411960/1_25_3_rhysh9.png",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="whatwe container">
      <h3 className="section-title">WHAT WE OFFER</h3>
      <div className="offer-grid">
        {items.map((it, idx) => (
          <div key={idx} className="offer-card">
            <div className="offer-icon">
              <img src={it.icon} alt={it.title} />
            </div>
            <div className="offer-title">{it.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
