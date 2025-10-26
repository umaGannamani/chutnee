import React from "react";
import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="whychoose container">
      <div className="whychoose-grid">

        {/* 🔸 Left Image Section */}
        <div className="whychoose-image">
          <img
            src="https://res.cloudinary.com/dlx9tnj7p/image/upload/v1761412996/Union_1_oszwwm.png"
            alt="Why Choose Chutnée"
          />
        </div>

        {/* 🔸 Right Content Section */}
        <div className="whychoose-content">
          {/* Top Text Container */}
          <div className="whychoose-text">
            <h2>Why Choose <span>Chutnée</span></h2>
            <h3 className="subheading">Fresh Flavours. Authentic Vibes.</h3>
            <p className="main-text">
              Discover bold, South Asian-inspired cuisine in the heart of
              Southall. From indulgent halal breakfasts to refined fusion
              plates, Chutnée blends tradition with modern flair — all served in
              a vibrant, welcoming space.
            </p>
          </div>

          {/* Stats Container */}
          <div className="whychoose-stats">
            <div className="stat-card">
              <div className="stat-percent">100%</div>
              <div className="stat-text">Locally Sourced Ingredients</div>
            </div>
            <div className="stat-card">
              <div className="stat-percent">98%</div>
              <div className="stat-text">Friendly, Attentive Service</div>
            </div>
            <div className="stat-card">
              <div className="stat-percent">99%</div>
              <div className="stat-text">Perfect for Social Gatherings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
