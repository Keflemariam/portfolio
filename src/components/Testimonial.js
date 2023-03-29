import React from "react";
import Slider from "react-slick";
import TestimonialBglogo from "../assets/images/testimonialbglogo.svg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div>
      <div className="testimonial">
        <img src={TestimonialBglogo} alt="" className="testimonial-bg" />
        <Slider {...settings}>
          <div className="testimonial-items">
            <p className="testimonial-items-comment">
              ‘’ Kif and his colleagues were required to address significant
              system operations and infrastructure challenges to implement this
              change. His keen expertise in Post Server Virtualization, was
              directly instrumental in the successful setup of our independent
              Exchange Service here at BDSC. This completed setup allowed BDSC
              to effectively branch off from the Embassy and increase overall
              productivity and reliability in substantive fashion. ”
            </p>
            <p className="testimonial-items-author">Bill Bell</p>
            <p className="testimonial-items-role">
              Information Program Officer
            </p>
          </div>
          <div className="testimonial-items">
            <p className="testimonial-items-comment">
              ‘’What I believe to be one of Kif's strongest qualities is his
              ability to build a productive rapport with the entire staff. I
              have repeatedly seen Kif work to develop relationships with the
              staff so as to elicit the cooperation needed to tackle both large
              and small projects. In addition to building a cohesive team, he
              worked to deploy clustered SQL 2008 and load balanced SharePoint
              2020, managed IT budgets and resources and somehow he found a way
              to squeeze in taking on the work of web based application
              development and implemented various web based applications, such
              as mission wide radio inventory tracking system, business contact
              management platform. ”
            </p>
            <p className="testimonial-items-author">Robert Hong, Deputy ISO</p>
            <p className="testimonial-items-role">
              Deputy Information Systems Officer
            </p>
          </div>
          <div className="testimonial-items">
            <p className="testimonial-items-comment">
              ‘’Kif has also shown great leadership as he helped me tremendously
              in rebuilding a team of IT professionals second to none. I have
              been consistently impressed by how well he utilizes Department
              resources to mentor and develop our IRM colleagues. He has
              actively fostered an environment of diversity and inclusion, and
              his colleagues have routinely shared their positive feedback with
              BDSC leadership. Kif leads from the front and is "in the trenches"
              with his ISC colleagues-he asks nothing of them that he is not
              willing to do himself. In short, Kif is the kind of IT leader any
              Foreign Service IT Manager would be lucky to have as part of the
              larger IRM team. Job well-done Kif!”
            </p>
            <p className="testimonial-items-author">Willie Velazquez</p>
            <p className="testimonial-items-role">
              Information Program Officer
            </p>
          </div>
        </Slider>
      </div>
      <p className="all-border all-border__testimonial"></p>
    </div>
  );
};

export default Testimonial;
