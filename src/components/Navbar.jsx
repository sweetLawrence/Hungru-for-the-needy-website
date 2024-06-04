// import React, { useEffect, useState } from "react";
// import { Link, animateScroll as scroll ,Element, scrollSpy, Events  } from "react-scroll";

// import "../styles/navbar.css";
// import { Navdata } from "../assets/data/Navdata";
// import LOGO from "../assets/images/hftn-logo.png";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   const bottomTextStyle = {
//     color: scrolled ? "#000" : "#fff",
//   };

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

//   useEffect(() => {
//     scrollSpy.update();

//     Events.scrollEvent.register('begin', (to, element) => {
//         setActiveItem(to);
//     });

//     return () => {
//         Events.scrollEvent.remove('begin');
//     };
// }, []);

//   return (
//     <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="logo">
//         <div className="image">
//           <img src={LOGO} alt="logo"  />
//         </div>
//         <div className="name">
//           <span className="top">Hungry For</span>
//           <span className="bottom" style={bottomTextStyle}>
//             The Needy
//           </span>
//         </div>
//       </div>

//       <div className="content">
//         {Navdata.map((value, key) => (
//           // <div className="row" key={key}>
//           //   {value}
//           // </div>

//           <Link
//             key={key}
//             activeClass="active"
//             to={value.toLowerCase()}
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="row"
//           >
//             {value}
//           </Link>
//         ))}
//       </div>
//       <div className="donate">
//         <Link
//           to="donate"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={900}
//           className="donate-button"
//         >
//           <button>Donate</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;







import React, { useEffect, useState } from 'react';
import { Link, scrollSpy, Events, animateScroll as scroll } from 'react-scroll';
import { Navdata } from '../assets/data/Navdata';
import LOGO from '../assets/images/hftn-logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null); 
  

  const bottomTextStyle = {
    color: scrolled ? '#000' : '#fff',
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
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <div className="image">
          <img src={LOGO} alt="logo"   />
        </div>
        <div className="name">
          <span className="top">Hungry For</span>
          <span className="bottom" style={bottomTextStyle}>
            The Needy
          </span>
        </div>
      </div>

      <div className="content">
        {Navdata.map((value, key) => (
          <Link
            key={key}
            activeClass="active"
            to={value.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`row ${activeItem === value.toLowerCase() ? 'active' : ''}`}
          >
            {value}
          </Link>
        ))}
      </div>

      <div className="donate">
        <Link
          to="donate"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="donate-button"
        >
          <button>Donate</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
