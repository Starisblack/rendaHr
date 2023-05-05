import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();



  const footerSections = [
    {
      title: "Products",
      content: [
        { title: "Technical Hiring", url: "https://reacthq.dev" },
        { title: "Attendance Management", url: "/attendance" },
        { title: "Payroll Management", url: "/payroll" },
        { title: "Performance Management", url: "/performance" },
      ],
    },

    {
      title: "Company",
      content: [
        { title: "About us", url: "/" },
        { title: "FAQs", url: "/pricing/#faqs" },
        { title: "Talk to an expert", url: "/" },
      ],
    },

    {
      title: "Legal",
      content: [
        { title: "Terms & Conditions", url: "/terms-of-service" },
        { title: "Privacy", url: "/privacy" },
      ],
    },
  ];


  const year = new Date().getFullYear();

  let footerBgColor;
  let addClasses;

  if (location.pathname === "/pricing") {
    footerBgColor = "#F4F7FA";
  }

   if(location.pathname === "/"){
     addClasses = "md:bg-footer-ellipse bg-no-repeat md:bg-[contain]  md:bg-[right_bottom]"
   }

  return (
    <div style={{ background: footerBgColor }} className={`${addClasses} footer-container `}>
      <footer>
        <div className="flex w-100 pb-3 max-[992px]:flex-col">
          <div className="max-[992px]:basis-full min-[993px]:basis-4/12 footer-logo">
            <div>
              <Logo height="50px" />
            </div>
            <p className="logo-text">
              ReendaHR is an AI Powered Core-HR Software that helps you with your people management
             from hire to fire and everything in between.
            </p>
          </div>

          <div className=" max-[992px]:basis-full min-[993px]:basis-7/12">
            <div className="footer-sections">
              {footerSections.map((section) => {
                return (
                  <div key={section.title}>
                    <h6>{section.title}</h6>
                    <ul>
                      {section.content.map((content) => {
                        return (
                          <li key={content.title}>
                            <a href={content.url}>{content.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <hr />
        <div className="copyright py-3 md:pr-[24px] md:pl-[60px]">
          <p>Copyright RendaHR. {year} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
