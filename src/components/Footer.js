import React from "react";
import Linkedin from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitter.svg";
import Youtube from "../assets/images/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        @2021 Keflemariamgebretsadike. ALL RIGHT RESERVED
      </p>
      <p className="footer-text">HELLO@KEFLEMARIAM.COM</p>
      <div className="header-social">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/keflemariam-gebretsadike-1b561763"
          rel="noreferrer"
        >
          <img alt="" src={Linkedin} />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/KiflemariamG"
          rel="noreferrer"
        >
          <img alt="" src={Twitter} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@KeflemariamGebretsadike"
          rel="noreferrer"
        >
          <img alt="" src={Youtube} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
