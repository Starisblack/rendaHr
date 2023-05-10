import React from "react";
import "./PerformCTA.css";
import Button from "../../../components/UI/Button/Button";
import AccordionCard from "../../../components/Accordion/Accordion";
import { Grid } from "@mui/material";

const PerformCTA = () => {
  const accordionTitles = [
    {
      title: "Competence Management",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      title: "Objectives and Key Results",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    
    {
      title: "Performance Reports",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    
    
  ];

  return (
    <div id="pm-cta">
      <Grid container>
        <Grid item xs={12} md={6} className="pm-cta-left-container">
          <h2>Transform your team management process</h2>
          <p className="pm-left-text">
            Keep track of your team’s contribution to your work force from a
            single dashboard.{" "}
          </p>
          <Button title="Get started" link="/get-started" />
        </Grid>

        <Grid item xs={12} md={6} className="pm-cta-right-container">
          {accordionTitles.map((accordion) => {
            return <AccordionCard key={accordion.title} title={accordion.title} content={accordion.content} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default PerformCTA;
