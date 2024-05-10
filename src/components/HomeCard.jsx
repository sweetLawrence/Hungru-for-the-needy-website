import React from "react";
import "../styles/homecard.css";

const HomeCard = () => {
  return (
    <div className="home_card">
      <p className="slogan">Love, Care and Empowerment</p>
      <h3>Hungry For The Needy</h3>
      <p className="mission">
        Empowering communities through education, health, and sustainable
        development, fostering a brighter tomorrow for all.
      </p>
      <div className="dnt">
        <div className="donate">
          <button>Donate</button>
        </div>
        {/* <Button text="Donate" /> */}
      </div>
    </div>
  );
};

export default HomeCard;
