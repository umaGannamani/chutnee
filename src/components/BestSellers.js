import React from "react";
import "./BestSellers.css";

const data = [
  {
    id: 1,
    title: "Burger",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411622/1_25_fe7bys.png",
  },
  {
    id: 2,
    title: "Cold Coffee",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411905/1_25_2_gveoau.png",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761411788/3_1_cd0vuv.png",
  },
];

export default function BestSellers() {
  return (
    <section className="bestsellers">
      <div className="container bs-inner">
        <h3 className="bs-title">BEST SELLERS</h3>

        <div className="bs-track">
          {/* Left Symbol */}
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761446502/Vector_8_i9by4w.png"
            alt="left symbol"
            className="symbol left-symbol"
          />

          {data.map((d) => (
            <div key={d.id} className="bs-item">
              <div className="bs-shape">
                <img src={d.img} alt={d.title} />
              </div>
              <div className="bs-label">{d.title}</div>
            </div>
          ))}

          {/* Right Symbol */}
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761446539/Vector_9_dlv6li.png"
            alt="right symbol"
            className="symbol right-symbol"
          />
        </div>

        <div className="view-menu-container">
          <button className="view-menu-btn">View Menu</button>
        </div>
      </div>
    </section>
  );
}
