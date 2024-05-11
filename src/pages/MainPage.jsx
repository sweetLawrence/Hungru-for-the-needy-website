import React from "react";
import About from "./About";
import Mission from "./Mission";
import Services from "./Services";

const MainPage = () => {
  return (
    <div className="mainpage">
      <About />
      <Mission />  
      <Services />
    </div>
  );
};

export default MainPage;
