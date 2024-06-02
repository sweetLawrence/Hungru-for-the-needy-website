import React from "react";
import About from "./About";
import Mission from "./Mission";
import Services from "./Services";
import DonationCard from "../components/DonationCard";
import Home from "./Home";
import Contacts from "./Contacts";

const MainPage = () => {
  return (
    <div className="mainpage">
      {/* <Home /> */}
      <About />
      <Mission />
      <Services />
      <DonationCard />
      <Contacts />
    </div>
  );
};

export default MainPage;
