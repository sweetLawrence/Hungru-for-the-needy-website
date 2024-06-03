import React, { useState } from "react";
import "../styles/about.css";
import Charity from "../assets/images/charity.webp";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="about" id="about">
      <div className="left">
        <h2>Who Are We</h2>
        <div className="cont">
          <div className="content">
            <span>Hungry for the Needy</span> is a compassionate charity
            organization driven by a singular mission: to alleviate hunger and
            provide support to those in need. With a dedicated team of
            volunteers and advocates, we strive to make a tangible difference in
            the lives of individuals and families facing food insecurity.
          </div>
        </div>
        <div className="readmore">
          <button className="read_more">Read More</button>
        </div>
      </div>
      <div className="right">
        <img src={Charity} alt="charity illustration" loading="lazy"/>
        <div className="blob">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M63,70Q27,90,29,53.5Q31,17,65,33.5Q99,50,63,70Z"
              stroke="none"
              stroke-width="0"
              fill="#BCE2BE"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
