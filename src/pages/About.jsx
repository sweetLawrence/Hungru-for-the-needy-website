// import React, { useState, useEffect } from "react";
// import '../styles/about.css'
// import "animate.css";

// const About = () => {

//     return (
//       <div className="about">
//         <div className="right">
//           <h2>Who Are We</h2>
//           <div className={`content`}>
//             <p>
//               <span>Hungry for the Needy</span> is a compassionate charity
//               organization driven by a singular mission: to alleviate hunger and
//               provide support to those in need. With a dedicated team of
//               volunteers and advocates, we strive to make a tangible difference in
//               the lives of individuals and families facing food insecurity. Our
//               efforts extend beyond mere sustenance; we aim to foster a sense of
//               community and solidarity, empowering individuals to overcome the
//               challenges of poverty and hunger.Beyond the immediate provision of
//               sustenance, our organization seeks to foster a sense of belonging
//               and empowerment among those we serve. Through our comprehensive
//               outreach programs, we not only distribute nutritious meals but also
//               offer holistic support aimed at addressing the root causes of
//               poverty and hunger. From educational initiatives to skills training
//               and job placement assistance, we are committed to empowering
//               individuals to overcome the challenges they face and build brighter
//               futures for themselves and their communities.
//               <br />
//               <br />
//               At Hungry for the Needy, we believe that no one should ever have to
//               go to bed hungry. Through our various initiatives and outreach
//               programs, we provide nutritious meals, food assistance, and
//               resources to vulnerable communities. Our commitment to empathy,
//               dignity, and compassion guides everything we do, as we work
//               tirelessly to create a world where every person has access to the
//               nourishment they need to thrive.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default About

import React, { useState } from "react";
import "../styles/about.css";
import Charity from "../assets/images/charity.webp";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="about">
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
        <img src={Charity} alt="charity illustration" />
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
