import React from "react";
import "./SocialShare.css";

const socials = [
  {
    id: "tiktok",
    label: "TIKTOK",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761452318/Union_6_gxsanr.png",
  },
  {
    id: "ig",
    label: "IG",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761448432/Union_2_aj465z.png",
  },
  {
    id: "snap",
    label: "SNAP",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761452302/Union_7_h97saf.png",
  },
];

export default function SocialShare() {
  return (
    <section className="socials-section">
      <h3 className="section-title">
        Stay Connected & Share Your Experience With Us!
      </h3>
      <div className="social-row">
        {socials.map((s) => (
          <div key={s.id} className="social-card">
            <img src={s.img} alt={s.label} />
            <div className="overlay-text">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
