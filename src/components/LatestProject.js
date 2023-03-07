import React from "react";
import Slider from "react-slick";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
import LPBGlogo from "../assets/images/lpbglogo.svg";

const LatestProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 790,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="lp">
      <img src={LPBGlogo} alt="" className="lp-bg" />
      <p className="about-intro-title lp__title">My Latest Projects</p>
      <Slider className="lp-items" {...settings}>
        <div>
          <img src={Project1} className="lp-pro-img" alt="" />
          <p className="lp-item-title">Web Design</p>
          <p className="lp-item-des">Supro Online Store</p>
        </div>
        <div>
          <img src={Project2} className="lp-pro-img" alt="" />
          <p className="lp-item-title lp-item-title__sec">Illustration</p>
          <p className="lp-item-des lp-item-des__sec">LW Poster</p>
        </div>
        <div>
          <img src={Project3} className="lp-pro-img" alt="" />
          <p className="lp-item-title lp-item-title__third">Advertising</p>
          <p className="lp-item-des lp-item-des__third">Films & Art Festival</p>
        </div>
        <div>
          <img src={Project1} className="lp-pro-img" alt="" />
          <p className="lp-item-title">Web Design</p>
          <p className="lp-item-des">Supro Online Store</p>
        </div>
        <div>
          <img src={Project2} className="lp-pro-img" alt="" />
          <p className="lp-item-title lp-item-title__sec">Illustration</p>
          <p className="lp-item-des lp-item-des__sec">LW Poster</p>
        </div>
        <div>
          <img src={Project3} className="lp-pro-img" alt="" />
          <p className="lp-item-title lp-item-title__third">Advertising</p>
          <p className="lp-item-des lp-item-des__third">Films & Art Festival</p>
        </div>
      </Slider>
      <p className="all-border all-border__lp"></p>
    </div>
  );
};

export default LatestProject;
