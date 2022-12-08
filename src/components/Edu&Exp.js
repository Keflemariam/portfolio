import React from "react";
import EduExpBG from "../assets/images/eduexpbglogo.svg";

const EduExp = () => {
  return (
    <div className="eduexp">
      <p className="about-intro-title eduexp__title">Education & Experience</p>
      <div className="eduexp-items">
        <div>
          <p className="eduexp-first-year">2002</p>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Bachelor Degree - Computer Science</p>
            <p className="eduexp-second-info-title">Addis Ababa University</p>
          </div>
          <div>
            <p className="eduexp-first-info-title">Certified Scrum Master</p>
            <p className="eduexp-second-info-title">Scrum Alliance</p>
          </div>
        </div>
        <div>
          <p className="eduexp-first-year">2002-2007</p>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Programmer Analyst</p>
            <p className="eduexp-second-info-title">Online Systems House, Ethiopia</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">IT Expert</p>
            <p className="eduexp-second-info-title">CIDA-WHIST Project, Ethiopia</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Programmer</p>
            <p className="eduexp-second-info-title">GTZ-PRHE Project</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Programmer</p>
            <p className="eduexp-second-info-title">Freelancer</p>
          </div>
          
        </div>
        <div>
          <p className="eduexp-first-year">2007-2022</p>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">
              Computer Management Specialist
            </p>
            <p className="eduexp-second-info-title">U.S. Department of State, US Embassy, BDSC</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Computer Management Specialist</p>
            <p className="eduexp-second-info-title">U.S. Embassy, Baghdad</p>
          </div>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Computer Management Assistant</p>
            <p className="eduexp-second-info-title">U.S. Embassy, Addis Ababa</p>
          </div>
          <p className="eduexp-first-year">2014-2015</p>
          <div className="eduexp-first-info">
            <p className="eduexp-first-info-title">Lead IT Operations</p>
            <p className="eduexp-second-info-title">
                  SoftLayer, an IBM Company, Paris, France.
            </p>
          </div>
        </div>
        <img src={EduExpBG} className="eduexp-bg" alt=""/>
      </div>
      <p className="all-border all-border__eduexp"></p>
    </div>
  );
};

export default EduExp;
