import React from "react"
import "./OnBoarding.css";
import Logo from "../../components/Logo/Logo";
import corehr from "../../assets/onboardIcons/corehr.png";
import payroll from "../../assets/onboardIcons/payr.png";
import talent from "../../assets/onboardIcons/talent.png";
import EastIcon from "@mui/icons-material/East";



const OnBoardingModal = () => {
  const onboardingDetails = [
    {
      icon: talent,
      title: "Talent Sourcing",
      desc: "Hire the best talent with barely any effort. We’ve taken care of everything for you. Sit back and relax.",
      url: "https://reacthq.dev"
    },

    {
      icon: corehr,
      title: "CoreHR System",
      desc: "Our system lets you focus on strategic HR by letting you automate much of your employee life-cycle processes - from hire through to exit.",
      url: "/performance"
    },

    {
      icon: payroll,
      title: "Payroll Management",
      desc: "Prepare payroll auto-magically and never lose an employee over delays or payroll mistakes.",
      url: "/payroll"
    },
  ];

  return (
    <div className="page on-boarding-container">
    
        <div>
          <Logo height="50px" />
          <h1 className="modal-title">
            Help us give you the best experience 🥳
          </h1>
          <p className="sub-title">What brings you to RendaHR?</p>

          <div className="on-boarding-services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-[80%] mx-auto gap-5">
            {onboardingDetails.map((detail) => {
              return (
                <a key={detail.title} href={detail.url}  className="on-boarding-card">
                <div
                  key={detail.title}
                >
                 
                    <div>
                      <img src={detail.icon} alt={detail.title} />
                    </div>

                    <div>
                      <p className="boarding-card-title">{detail.title}</p>
                      <p className="boarding-card-desc">{detail.desc}</p>
                    </div>
                </div>
                </a>
              );
            })}
          </div>
           <div style={{margin: "50px 0"}}>
          <a
            href="/"
            className="back-home-btn"
          >
            Back to home <EastIcon />
          </a>
          </div>
        </div>
    </div>
  );
};

export default OnBoardingModal;
