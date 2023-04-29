import "./PServiceCard.css";
import React, {FC} from "react";

type PServiceCardProps ={
  icon?: any,
  title?: string,
  desc?: string
}
const PServiceCard:FC<PServiceCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="pm-service-card">
      <div className="pm-card-icon">
        <img src={icon} alt={title} />
      </div>

      <div className="pm-card-title">
        <h3>{title}</h3>
      </div>

      <div className="pm-card-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PServiceCard;
