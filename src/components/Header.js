import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitter.svg";
import Youtube from "../assets/images/youtube.svg";

const Header = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div>
      <div className="header">
        <div className="header-menu">
          <a href="/" className="header-menu-item">
            Works
          </a>
          <a href="/" className="header-menu-item">
            Contact
          </a>
        </div>
        {navShow ? (
          <i
            className="fa-solid fa-xmark header-bar-icon"
            onClick={() => {
              setNavShow(false);
            }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars header-bar-icon "
            onClick={() => {
              setNavShow(true);
            }}
          ></i>
        )}
        <img src={Logo} className="header-logo" alt="" />
        <div className="header-social">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/keflemariam-gebretsadike-1b561763"
            rel="noreferrer"
          >
            <img alt="" src={Linkedin} />
          </a>
          <img alt="" src={Twitter} />
          <img alt="" src={Youtube} />
        </div>
      </div>
      {navShow && (
        <div className="nav-mobile">
          <a href="/" className="header-menu-item">
            Works
          </a>
          <a href="/" className="header-menu-item">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
