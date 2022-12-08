import React from "react";
import Header from "./Header";
import About from "./About";
import Addvantage from "./Addvantage";
import EduExp from "./Edu&Exp";
import LatestProject from "./LatestProject";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const index = () => {
  return (
    <div>
      <Header />
      <About />
      <Addvantage />
      <EduExp />
      <LatestProject />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default index;
