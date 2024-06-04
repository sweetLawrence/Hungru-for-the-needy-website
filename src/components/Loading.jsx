import React, { useState, useEffect } from "react";
import "animate.css";

const Loading = () => {

  return (
    <div className="loading animate__animated animate__zoomIn">
      <div className="txt">Hungry for the Needy Foundation</div>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
