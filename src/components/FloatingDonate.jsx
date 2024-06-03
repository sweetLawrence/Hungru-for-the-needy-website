import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import 'animate.css';


const FloatingDonate = () => {
  const [showFloatingDonate, setShowFloatingDonate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 1700 && scrollTop < 2500) {
        setShowFloatingDonate(true);
      } else {
        setShowFloatingDonate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showFloatingDonate && (
        <div className="floating-donate">
          <Link
            to="donate"
            spy={true}
            smooth={true}
            offset={-100}
            duration={900}
            className="floating-donate-button"
          >
            {/* <button>Donate</button> */}
            <div className="d-icon animate__animated animate__heartBeat"> <VolunteerActivismIcon /></div>
           
          </Link>
        </div>
      )}
    </>
  );
};

export default FloatingDonate;
