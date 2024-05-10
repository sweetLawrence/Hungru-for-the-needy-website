import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Navdata } from "../assets/data/Navdata";
import LOGO from "../assets/images/hftn-logo.png";

const Navbar = () => {
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
     <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <div className="image">
          <img src={LOGO} alt="logo" />
        </div>
        <div className="name">
          <span className="top">Hungry For</span>
          <span className="bottom">The Needy</span>
        </div>
      </div>

      <div className="content">
        {Navdata.map((value, key) => (
          <div className="row" key={key}>
            {value}
          </div>
        ))}
      </div>
      <div className="donate">
        <button>Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
