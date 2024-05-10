import React, { useEffect, useState } from "react";
import { Navdata } from "../assets/data/Navdata";
import { MdMenu } from "react-icons/md";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import LOGO from "../assets/images/hftn-logo.png";
import "../styles/navbar.css";
import 'animate.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) { // Change 100 to your desired scroll position
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container ${scrolled ? 'scrolled' : ''}`}>
      <div className={`mobile ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <div className={`toggle-icon ${scrolled ? 'black' : ''}`} onClick={toggleMobileNav}>
          <MdMenu />
        </div>
      </div>
      {isOpen && (
        <div className="mobile-nav animate__animated animate__fadeInDown">
          {Navdata.map((value, key) => (
            <div className="row" onClick={toggleMobileNav} key={key}>
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
