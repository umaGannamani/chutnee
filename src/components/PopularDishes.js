import React from "react";
import "./PopularDishes.css";

const dishes = [
  {
    id: 1,
    title: "Chicken Burger",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761448432/Union_2_aj465z.png",
  },
  {
    id: 2,
    title: "Panni Poori",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761448470/Union_3_fekrx2.png",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761448530/Union_4_oir6do.png",
  },
  {
    id: 4,
    title: "Mango Shake",
    img: "https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761448570/Union_5_dqbkzu.png",
  },
];

export default function PopularDishes() {
  return (
    <section className="popular-section">
      <div className="popular-content">
        <h2 className="popular-heading">Most Popular Dishes</h2>
        <p className="popular-subtext">
          Get a taste of what everyone’s talking about. These are the Chutnée favorites our guests keep coming back for.
        </p>
      </div>

      <div className="popular-row">
        {dishes.map((d) => (
          <div key={d.id} className="popular-item">
            <div className="popular-image">
              <img src={d.img} alt={d.title} />
            </div>
            <h4 className="popular-title">{d.title}</h4>
          </div>
        ))}
      </div>

      <div className="popular-btn-wrapper">
        <button className="view-menu-btn">View Menu</button>
      </div>
    </section>
  );
}
