import renderLogo from "../../assets/images/RendaHR.png";
import "./Logo.css";
import React from "react";

const logo = (props: { height?: any; margin?: any; }) => (
  <div className="Logo" style={{ height: props.height, margin: props.margin }}>
    <a href="/">
      <img src={renderLogo} alt="renderHR" />
    </a>
  </div>
);

export default logo;
