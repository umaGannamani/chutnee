import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  const data = [
    {
      id: 1,
      text: "NuR Cafe brings Arabian warmth to Manchester with hearty breakfasts, French-inspired pastries, and halal dishes crafted with care. A luxurious experience awaits, whether for coffee or a full meal.",
      author: "Anu Ajit",
      img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761449805/Rectangle_28_rszvr4.png",
    },
    {
      id: 2,
      imgTop: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761449861/Rectangle_26_ehi5x2.png",
      text: "NuR Cafe brings Arabian warmth to Manchester with hearty breakfasts, French-inspired pastries, and halal dishes crafted with care. A luxurious experience awaits, whether for coffee or a full meal.",
      author: "Anu Ajit",
    },
    {
      id: 3,
      text: "NuR Cafe brings Arabian warmth to Manchester with hearty breakfasts, French-inspired pastries, and halal dishes crafted with care. A luxurious experience awaits, whether for coffee or a full meal.",
      author: "Anu Ajit",
      img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761449830/Rectangle_30_dxfgbp.png",
    },
  ];

  const renderStars = () => "⭐ ⭐ ⭐ ⭐ ⭐";

  return (
    <section className="about-section">
      <h2 className="about-heading">About Us — Love About Us</h2>

      <div className="about-grid">
        {/* Card 1 */}
        <div className="about-card">
          <div className="stars">{renderStars()}</div>
          <p className="about-text">{data[0].text}</p>
          <p className="about-author">{data[0].author}</p>
          <img className="about-img" src={data[0].img} alt="testimonial" />
        </div>

        {/* Card 2 */}
        <div className="about-card">
          <img className="about-img-top" src={data[1].imgTop} alt="testimonial" />
          <div className="stars">{renderStars()}</div>
          <p className="about-text">{data[1].text}</p>
          <p className="about-author">{data[1].author}</p>
        </div>

        {/* Card 3 */}
        <div className="about-card">
          <div className="stars">{renderStars()}</div>
          <p className="about-text">{data[2].text}</p>
          <p className="about-author">{data[2].author}</p>
          <img className="about-img" src={data[2].img} alt="testimonial" />
        </div>
      </div>
    </section>
  );
}
