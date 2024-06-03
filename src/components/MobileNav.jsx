// import React, { useEffect, useState } from "react";
// import { Navdata } from "../assets/data/Navdata";
// import { Link, animateScroll as scroll } from "react-scroll";

// import { MdMenu } from "react-icons/md";

// import LOGO from "../assets/images/hftn-logo.png";
// import "../styles/navbar.css";
// import "animate.css";

// const MobileNav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMobileNav = () => {
//     setIsOpen(!isOpen);
//   };

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       if (scrollTop > 100) {
     
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);



//   return (
//     <div className={`container ${scrolled ? "scrolled" : ""}`}>
//       <div className={`mobile ${isOpen ? "open" : ""}`}>
//         <div className="logo">
//           <img src={LOGO} alt="logo" />
//         </div>
//         <div
//           className={`toggle-icon ${scrolled ? "black" : ""}`}
//           onClick={toggleMobileNav}
//         >
//           <MdMenu />
//         </div>
//       </div>
//       {isOpen && (
//         <div className="mobile-nav">
//           {/* animate__animated animate__fadeInDown */}
//           {Navdata.map((value, key) => (
//             <div className="row" onClick={toggleMobileNav} key={key}>
//               {/* {value} */}
//               <Link
//               onClick={toggleMobileNav}
//               key={key}
//               activeClass="active"
//               to={value.toLowerCase()}
//               spy={true}
//               smooth={true}
//               offset={-95}
//               duration={1500}
//               className="row"
//             >
//               {value}
//             </Link>
//             </div>

        
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileNav;



import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { Navdata } from '../assets/data/Navdata';
import { MdMenu } from 'react-icons/md';
import LOGO from '../assets/images/hftn-logo.png';
import '../styles/navbar.css';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    scrollSpy.update();
    Events.scrollEvent.register('begin', (to, element) => {
      setActiveItem(to);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <div className={`container ${scrolled ? 'scrolled' : ''}`}>
      <div className={`mobile ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
        <div
          className={`toggle-icon ${scrolled ? 'black' : ''}`}
          onClick={toggleMobileNav}>
          <MdMenu />
        </div>
      </div>
      {isOpen && (
        <div className="mobile-nav animate__animated animate__fadeInDown">
          {Navdata.map((value, key) => (
            <ScrollLink
              key={key}
              activeClass="active"
              to={value.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-95}
              duration={500}
              onClick={toggleMobileNav}
            >
              <div
                className={`row ${activeItem === value.toLowerCase() ? 'active' : ''}`}>
                {value}
              </div>
            </ScrollLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
