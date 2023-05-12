import React from "react";
import "./Privacy.css";
import { useEffect } from "react";
import { privacyData } from "./privacyData";
import PageTitle from "../../components/PageTitle";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page pr-page">
      <PageTitle title="Privacy Policy - Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    
        <h1 className="tc-title"> Privacy Policy for RendaHR</h1>
      <div className="tc-details-container">
        
        <p className="intro-text mb-10">
          {" "}
          RendaHR is committed to protecting the privacy of its users. This
          Privacy Policy explains how RendaHR collects, uses, and discloses
          information about you when you use our website or services.
        </p>

        {privacyData.map((privacy) => {
          return (
            <div key={privacy.title} className="my-6">
              <p className="tc-detail-title">{privacy.title} </p>

              <p className="tc-detail-desc">{privacy.desc}</p>

              <ul className="ul-list">
                {privacy.descLists?.map((list) => {
                  return <li key={list}>{list}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Privacy;
