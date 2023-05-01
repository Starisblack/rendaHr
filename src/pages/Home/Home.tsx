import React from "react";
import Brands from "../../components/Brands";
import HomeHero from "./HomeHero/HomeHero";
import Tabs from "../../components/Tabs";
import HomeTestimonials from "./HomeTestimonials";
import Join from "../../components/Join";
import "./Home.css"

const Home = () => {
  return (
    <div className="page home-page hero-bg pb-0">
      <HomeHero />
      <div className="bg-white">
      <Brands />
      <Tabs />
      <div className="relative">
        <div className="md:bg-feature-ellipse bg-no-repeat xl:h-[1034px] xl:w-[1034px] md:h-[720px] md:w-[720px] bg-[contain]  absolute z-40"></div>
        <HomeTestimonials />
      </div>

      <Join />
      </div>
    </div>
  );
};

export default Home;
