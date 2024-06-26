import React, { useState } from "react";
import LOGO from "../assets/images/eq-logo.png";
import Donation from "../assets/images/donate.webp";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Toaster, toast } from "sonner";
import Img2small from "../assets/images/donate-small.png";

const DonationCard = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  function handleLoad() {
    setImgLoaded(true);
  }

  const copyTheText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Account Number copied to clipboard successfully", {
          className: "custom-toast",
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="donation-component" id="donate">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${Img2small})` }}
      >
        <img
          src={Donation}
          alt="logo"
          className="logo"
          onLoad={handleLoad}
          style={{
            opacity: imgLoaded ? 1 : 0,
            transition: "opacity 400ms ease-in-out",
          }}
        />
        <div className="donate-text">
          Only life lived for others is a life worthwhile
        </div>
      </div>
      <div className="donation-card">
        <div className="container">
          <div className="title">
            Donate{" "}
            <span>
              <VolunteerActivismIcon />
            </span>
          </div>

          <div className="equity-logo">
            <img src={LOGO} alt="equity bank logo" />
          </div>

          <div className="paybill">
            <div className="number">
              <span className="txt">Paybill</span>
              <span className="num">247247</span>
            </div>

            <div className="acc">
              <span className="txt">Account</span>
              <span className="num">950369</span>
            </div>
          </div>

          <div className="account">
            <span className="txt">Account Number</span>
            <span className="num">0910182950369</span>
            <button
              className="copy"
              onClick={() => copyTheText("0910182950369")}
            >
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default DonationCard;
