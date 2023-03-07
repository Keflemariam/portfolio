import React from "react";
import EduExpBG from "../assets/images/eduexpbglogo.svg";

const EduExp = () => {
  return (
    <div className="eduexp">
      <p className="about-intro-title eduexp__title">Education & Experience</p>
      <div className="eduexp-items">
        <div>
          <p className="eduexp-first-year">2014</p>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Bachelor Degree of Design</p>
            <p className="eduexp-second-info-title">RMIT University,</p>
          </div>
          <div>
            <p className="eduexp-first-info-title">UI/UX Design Certificate</p>
            <p className="eduexp-second-info-title">
              {" "}
              University Of Houston,US
            </p>
          </div>
        </div>
        <div>
          <p className="eduexp-first-year">2015-2019</p>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Design Internship</p>
            <p className="eduexp-second-info-title">CMC Corporation, UK</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Graphic Designer</p>
            <p className="eduexp-second-info-title">Tripadvisor Ltd, UK</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Leader Graphic Design</p>
            <p className="eduexp-second-info-title">Tripadvisor Ltd, UK</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Web Designer</p>
            <p className="eduexp-second-info-title">Freelancer</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Web Designer/ Author</p>
            <p className="eduexp-second-info-title">Envato Market</p>
          </div>
        </div>
        <div>
          <p className="eduexp-first-year">2015-2019</p>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">
              Product Designe Management
            </p>
            <p className="eduexp-second-info-title">Dribble LLC, US</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Art Director / Co-Founder</p>
            <p className="eduexp-second-info-title">Spotify</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Founder</p>
            <p className="eduexp-second-info-title">IDesign Magazine</p>
          </div>
          {/* <p className="eduexp-first-year">2014-2015</p> */}
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Author of The Book</p>
            <p className="eduexp-second-info-title">
              Work for Money, Design for love
            </p>
          </div>
        </div>
        <img src={EduExpBG} className="eduexp-bg" alt="" />
      </div>
      <p className="all-border all-border__eduexp"></p>
    </div>
  );
};

export default EduExp;
