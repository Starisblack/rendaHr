import React from "react";
import Values from "../../components/Values";
import AboutCTA from "../../components/AboutCTA";
import Records from "../../components/Records";
import Intro from "../../components/Intro";

const About = () => {
 

  return (
    <div className="page about-page px-[5%] lg:px-[10%]">
      {/* hero section */}
      <h1 className="text-center text-[32px] md:text-[64px] text-secondary-dark font-nova">
        About us
      </h1>
      <p className="font-nunito text-center text-muted text:[18px]  md:text-[25px]">
        We are on a mission to make to build the modern workplace.
      </p>
      <div className="flex max-[769px]:flex-wrap  gap-5  py-24">
        <div className="basis-full md:basis-4/6 h-[250px]  md:h-[500px] bg-about bg-no-repeat max-[769px]:bg-center   bg-cover rounded-[20px]"></div>
        <div className="basis-full md:basis-5/12 h-[250px] md:h-[500px] bg-about2 bg-cover bg-no-repeat lg:bg-top-right max-[769px]:bg-[right_bottom_-10rem] rounded-[20px]"></div>
      </div>
      <Intro />
      <Records />
      <AboutCTA />
      <Values />
    </div>
  );
};

export default About;
