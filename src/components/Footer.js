import React from "react";

import githublogo from "../assets/icons/githublogo.png";
import gmaillogo from "../assets/icons/gmaillogo.png";
import linkedinlogo from "../assets/icons/linkedinlogo.png";

function Footer() {
  return (
    <footer id="contact">
      <a href="https://www.linkedin.com/in/anthony-cardozo-26522313a/" rel="noreferrer" target="_blank">
        <img src={linkedinlogo} alt="linked in logo" />
      </a>
      <a href="https://github.com/acardozoweb" rel="noreferrer" target="_blank">
        <img src={githublogo} alt="github logo" />
      </a>
      <a href="anthonyccardozo@gmail.com">
        <img src={gmaillogo} alt="gmail logo" />
      </a>
    </footer>
  );
}

export default Footer;
