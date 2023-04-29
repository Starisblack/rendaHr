import "./PricingCard.css";
import React, { FC } from "react";

type PricingCardProps ={
  title?: string,
  subTitle?: string,
  desc?: string,
  num?: number,
  features?: any
}

const PricingCard: FC<PricingCardProps> = ({ title, subTitle, desc, num, features }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="price-desc">{desc}</p>

      <p className="price-title">{subTitle}</p>
     
      <a href="http://app.joinrenda.com/register" target="_blank" rel="noreferrer"><button className="pricing-btn">Start for free</button></a>

      <p>{num}+ features, including:</p>
      <ul>
        {features.map((feature: any) => {
          return <li key={feature}>{feature}</li>;
        })}
      </ul>

      <p>See all features</p>
    </div>
  );
};

export default PricingCard;
