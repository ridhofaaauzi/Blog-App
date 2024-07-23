import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made with Love and React JS</span>
    </footer>
  );
};

export default Footer;
