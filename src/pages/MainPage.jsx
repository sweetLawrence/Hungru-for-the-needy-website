import React from "react";
import About from "./About";
import Mission from "./Mission";
import Services from "./Services";
import DonationCard from "../components/DonationCard";

const MainPage = () => {
  return (
    <div className="mainpage">
      <About />
      <Mission />  
      <Services />
      <DonationCard />
    </div>
  );
};

export default MainPage;
