import React from "react";
import Me from "../assets/images/me.svg";
import AboutBGLog1 from "../assets/images/aboutbglogo1.svg";
import AboutBGLog2 from "../assets/images/aboutbglogo2.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-intro">
        <p className="about-intro-title">Keflemariam Gebretsadike</p>
        <p className="about-intro-des">Technology consultant / Developer</p>
        <img src={AboutBGLog1} className="aboutbglogo1" alt="" />
        <img src={AboutBGLog2} className="aboutbglogo2" alt="" />
      </div>
      <div className="about-info">
        <div className="about-info-bio">
          <div>
            <p className="about-info-bio-title">Biography</p>
            <p className="about-info-bio-des">
              Hi, I’m Keflemariam Gebretsadike, a technology enthusiast and
              Full-Stack software developer
            </p>
          </div>
          <div className="about-info-bio-second">
            <p className="about-info-bio-title">Contact</p>
            <p className="about-info-bio-des">
              Duba, UAE <br />
              Keflemariam@outlook <br />
              +971 056 200 7622
            </p>
          </div>
          <div>
            <p className="about-info-bio-title">Services</p>
            <p className="about-info-bio-des">
            Product Development, Implement Solutions
            </p>
          </div>
        </div>
        <div className="about-info-me">
          <img src={Me} alt="" className="about-info-me-img" />
        </div>
        <div className="about-info-count">
          <div>
            <p className="about-info-bio-title">Years Of Experience</p>
            <p className="about-info-count-number">20+</p>
          </div>
          <div className="about-info-count-second">
            <p className="about-info-bio-title">Clients</p>
            <p className="about-info-count-number">100%</p>
          </div>
          <div>
            <p className="about-info-bio-title">Projects</p>
            <p className="about-info-count-number">25</p>
          </div>
        </div>
      </div>
      <p className="all-border"></p>
    </div>
  );
};

export default About;
