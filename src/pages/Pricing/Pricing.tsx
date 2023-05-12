import React from "react";
import { useEffect } from "react";
import PricePageCTA from "../../components/CallToActions/PricePageCTA/PricePageCTA";
import { Faq } from "../../components/FAQ/Faq";
import { Pricinginfo } from "../../components/PricingInfo/Pricinginfo";
import PricingTable from "./PricingTable/PricingTable";
import "./Pricing.css";
import { useLocation } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const Pricing = () => {
  const { hash } = useLocation();

//   useEffect(() => {
//   const elementToScroll = hash ? document.getElementById(hash.replace("#", "")) : null;

//   if (elementToScroll) {
//     window.scrollTo({
//       top: elementToScroll.offsetTop - 0,
//       behavior: "smooth",
//     });
//   } else {
//     window.scrollTo(0, 0);
//   }
// }, [hash]);
useEffect(() => {
  const elementToScroll = hash ? document.getElementById(hash.replace("#", "")) : null;

  if (elementToScroll) {
    window.scrollTo({
      top: elementToScroll.offsetTop - 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo(0, 0);
  }
}, [hash]);

  return (
    <div className="page pricing-page">
      <PageTitle title="Pricing - Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      
      <div className="pricing-container">
        <Pricinginfo />
        <PricePageCTA />
      </div>
      <div className="pricing-plans-container">
        <div className="pricing-table">
          <PricingTable />
        </div>
      </div>

      <div id="faqs" className="faq-container">
        <Faq />
      </div>
    </div>
  );
};

export default Pricing;
