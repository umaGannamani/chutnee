import React from "react";
import HeroCollage from "./components/HeroCollage";
import Intro from "./components/Intro";
import WhatWeOffer from "./components/WhatWeOffer";
import BestSellers from "./components/BestSellers";
import Reserve from "./components/Reserve";
import PopularDishes from "./components/PopularDishes";
import AboutUs from "./components/AboutUs";
import Reels from "./components/Reels";
import SocialShare from "./components/SocialShare";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";

export default function App() {
  return (
    <div className="site">
      <main>
        <HeroCollage />
        <Intro />
        <WhatWeOffer />
        <WhyChoose />
        <BestSellers />
        <Reserve />
        <PopularDishes />
        <AboutUs />
        <Reels />
        <SocialShare />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
