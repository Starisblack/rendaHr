import React, { FC } from "react";
import "./TopHeader.css";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import partyEmoji from "../../assets/party-popper 1.png";

type TopheaderProps = {
  showSideDrawer: any;
};

const TopHeader: FC<TopheaderProps> = ({ showSideDrawer }) => {
  return (
    <>
      {!showSideDrawer && (
        <div className="top-header-container">
          <img
            style={{ height: "30px", width: "30px" }}
            src={partyEmoji}
            alt="party"
          />
          <p>Web Development Class starts March 12, 2023</p>
          <Link to="/get-started" className="take-test-btn">
            Take Eligibility Test <EastIcon />
          </Link>
        </div>
      )}
    </>
  );
};

export default TopHeader;
