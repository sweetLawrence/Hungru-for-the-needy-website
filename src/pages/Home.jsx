import React, { useState } from "react";
import "../styles/home.css";
import HOME from "../assets/images/home.webp";
import IMG2 from "../assets/images/donate.webp";
import HomeCard from "../components/HomeCard";
import HomeSmall from "../assets/images/home-small.png";
import Img2small from "../assets/images/donate-small.png";
const Home = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  function handleLoad() {
    setImgLoaded(true);
  }
  return (
    <div className={`home`} id="home">
      <div
        className="home_image"
        style={{ backgroundImage: `url(${HomeSmall})` }}
      >
        <img
          src={HOME}
          alt="home_image"
          onLoad={handleLoad}
          style={{
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 400ms ease-in-out",
          }}
        />
      </div>
      <div className="card">
        <HomeCard />
      </div>
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eaeaff"
            fill-opacity="1"
            d="M0,64L80,106.7C160,149,320,235,480,224C640,213,800,107,960,69.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div className="wave-support"></div>
      </div>
      <div className="circle" style={{ backgroundImage: `url(${Img2small})` }}>
        <img
          src={IMG2}
          alt="img2"
          onLoad={handleLoad}
          style={{
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 400ms ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
