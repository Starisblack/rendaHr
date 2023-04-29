import "./Button.css";
import React, {FC } from 'react'

type ButtonProps = {
  title?: string
  icon?: any
  link?: string
  src?: any
  clicked?: () => void
}

const Button:FC<ButtonProps> = ({ title, icon, link }) => {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      {title} {icon && <img src={icon} className="inline" alt="arrow" />}
    </a>
  );
};

export default Button;

export const GetStartedBtn:FC<ButtonProps> = (props) => {
  return (
    <a   
      onClick={props.clicked}
      href="/get-started"
      className="btn get-started-btn"
    >
      {props.title}
    </a>
  );
};

export const LoginBtn:FC<ButtonProps> = (props) => {
  return (
    <a
      onClick={props.clicked}
      href="http://app.joinrenda.com/login"
      target="_blank"
      rel="noreferrer"
      className="login-btn"
    >
      Login
    </a>
  );
};
