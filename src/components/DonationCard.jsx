import React from "react";
import LOGO from "../assets/images/eq-logo.png";
import Donation from "../assets/images/donate.jpg";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Toaster, toast } from "sonner";

const DonationCard = () => {
  const copyTheText = (text) => {

    navigator.clipboard.writeText(text)
    .then(() => {
        // alert("Account number copied to clipboard: " + text);
        toast.success("Account Number copied to clipboard successfully", {
            className: 'custom-toast',
        });
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="donation-component">
      <div className="bg-image">
        <img src={Donation} alt="logo" className="logo" />
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
            <button className="copy" onClick={() => copyTheText('0910182950369')}>
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        autoClose={3000}
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

