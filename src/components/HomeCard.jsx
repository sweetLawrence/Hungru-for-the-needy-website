import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/homecard.css";

const HomeCard = () => {
  return (
    <div className="home_card">
      <p className="slogan">Love, Care and Empower</p>
      <h3>Hungry For The Needy</h3>
      <p className="mission">
        Empowering communities through education, health, and sustainable
        development, fostering a brighter tomorrow for all.
      </p>
      <div className="dnt">
        <div className="donate">
        <Link
              to="donate"
              spy={true}
              smooth={true}
              offset={-100}
              duration={900}
              className="donate-button"
            >
          <button>Donate</button>
          </Link>
        </div>
        
       
      </div>
    </div>
  );
};

export default HomeCard;
