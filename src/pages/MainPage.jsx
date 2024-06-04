import React from "react";
import About from "./About";
import Mission from "./Mission";
import Services from "./Services";
import DonationCard from "../components/DonationCard";
import Contacts from "./Contacts";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="mainpage">
      <About />
      <Mission />
      <Services />
      <DonationCard />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
