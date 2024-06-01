import React, { useState, useEffect } from "react";
import "animate.css";
// import './Loading.css'; // Import CSS file for loading animation
import charityLogo from "../assets/images/hftn-logo.png"; // Import your charity logo

const Loading = () => {

  return (
    <div className="loading animate__animated animate__zoomIn">
      <div className="txt">Hungry for the Needy Foundation</div>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
