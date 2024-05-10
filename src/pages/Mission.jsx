import React from "react";
import "../styles/mission.css";
import MIVI from "../assets/images/mivi.png";
// import DoneIcon from "@mui/icons-material/Done";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Mission = () => {
  return (
    <div className="mission-page">
      <div className="top">
        <div className="left">
          <div className="mission-card-x">
            <h2>Our Mission</h2>
            <div className="content">
              To work alongside communities, build capacity to identify and
              address the most pressing challenges, in order to promote greater
              social equity and balance through collaborative partnerships and
              innovative solutions.
            </div>
          </div>

          <div className="vision-card">
            <h2>Our Vision</h2>
            <div className="content">
              To inspire and mobilize people to drive meaningful progress
              towards a more just and equitable future through community
              give-backs.
            </div>
          </div>
          <div className="donate-div">
            <button>Donate</button>
          </div>
        </div>
        <div className="right">
          <img src={MIVI} alt="mivi" />
          <div className="blob-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="fill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform="rotate(137 0.5 0.5)"
                >
                  <stop offset="0%" stop-color="#A0D6A2"></stop>
                  <stop offset="100%" stop-color="#3578FF"></stop>
                </linearGradient>
              </defs>
              <path
                d="M62.5,71.5Q25,93,25,50Q25,7,62.5,28.5Q100,50,62.5,71.5Z"
                stroke="none"
                stroke-width="0"
                fill="url(#fill)"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h2>Our goal is to: </h2>
        <div className="goals">
          <div className="goalcard">
            <div className="blob one">
              <div className="icon one">
                {/* <DoneIcon /> */}
                <IoMdCheckmarkCircleOutline />
              </div>
            </div>
            <div className="cnt">Promote Health and Well-being</div>
          </div>
          <div className="goalcard">
            <div className="blob two">
              <div className="icon two">
                {/* <DoneIcon /> */}
                <IoMdCheckmarkCircleOutline />
              </div>
            </div>
            <div className="cnt">Advocate and create awareness</div>
          </div>
          <div className="goalcard">
            <div className="blob three">
              <div className="icon th">
                {/* <DoneIcon /> */}
                <IoMdCheckmarkCircleOutline />
              </div>
            </div>
            <div className="cnt">Increase Outreach and Impact</div>
          </div>
          <div className="goalcard">
            <div className="blob four">
              <div className="icon four">
                {/* <DoneIcon /> */}
                <IoMdCheckmarkCircleOutline />
              </div>
            </div>
            <div className="cnt">Engage the community</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
