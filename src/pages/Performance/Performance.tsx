import React from "react";
import Hero from "./PerformanceHero/PerformanceHero";
import "./Performance.css";
import PServices from "./PServices/PServices";
import PerformCTA from "./PerformCTA/PerformCTA";
import CallToAction from "../../components/CallToActions/CallToAction";
import { useEffect } from "react";

const Performance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page performance-page">
      <Hero />
      <PServices />
      <section id="pm-call-actions">
        <PerformCTA />
        <CallToAction
          title=" Ready to increse staff productivity?
          Join RendaHR"
        />
      </section>
    </div>
  );
};

export default Performance;
