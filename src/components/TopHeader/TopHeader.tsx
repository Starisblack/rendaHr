import React from 'react'
import "./TopHeader.css"
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import partyEmoji from "../../assets/party-popper 1.png"

const TopHeader = () => {
  return (
    <div className="top-header-container">
         <img style={{height: "30px", width: "30px"}} src={partyEmoji} alt= "party" />
        <p>RendaHR is completely free for teams below 10!</p>
        <Link to="/get-started" className="take-test-btn">Get Started <EastIcon /></Link>
    </div>
  )
}

export default TopHeader