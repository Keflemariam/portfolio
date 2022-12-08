import React from "react";
import AdvantageLogo from "../assets/images/advantagebglogo.svg";

const Addvantage = () => {
  return (
    <div className="advantage">
      <img src={AdvantageLogo} className="advantage-bg" alt="" />
      <p className="about-intro-title advantage__title">My Advantage</p>
      <div className="advantage-items">
        <div>
          <div className="advantage-item-figma">
            <p className="advantage-item-percentage">90%</p>
          </div>
          <p className="advantage-items-name">Figma</p>
        </div>
        <div>
          <div className="advantage-item-figma advantage-item-figma__sketch">
            <p className="advantage-item-percentage">95%</p>
          </div>
          <p className="advantage-items-name">Sketch</p>
        </div>
        <div>
          <div className="advantage-item-figma advantage-item-figma__adobexd">
            <p className="advantage-item-percentage">82%</p>
          </div>
          <p className="advantage-items-name">Adobe XD</p>
        </div>
        <div>
          <div className="advantage-item-figma advantage-item-figma__java">
            <p className="advantage-item-percentage">93%</p>
          </div>
          <p className="advantage-items-name">Java</p>
        </div>
        <div>
          <div className="advantage-item-figma advantage-item-figma__bootstrap">
            <p className="advantage-item-percentage">76%</p>
          </div>
          <p className="advantage-items-name">Bootstrap</p>
        </div>
        <div>
          <div className="advantage-item-figma advantage-item-figma__html">
            <p className="advantage-item-percentage">88%</p>
          </div>
          <p className="advantage-items-name">HTMLS/CSS</p>
        </div>
      </div>
      <p className="all-border all-border__advantage"></p>
    </div>
  );
};

export default Addvantage;
