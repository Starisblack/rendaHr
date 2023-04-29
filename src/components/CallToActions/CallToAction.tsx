import React, {FC } from 'react'
import Button from "../UI/Button/Button";
import "./CallToAction.css";

type CTAProps = {
  title: string
}

const CallToAction:FC<CTAProps> = ({title}) => {
  return (
    <div className="callToAction">
      <h1>
       {title}
      </h1>
      <Button
        title="Get Started For Free"
        link="/get-started"
      />
    </div>
  );
};

export default CallToAction;
