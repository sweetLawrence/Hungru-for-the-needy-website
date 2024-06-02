import React, { useState } from "react";
import "../styles/contacts.css";
import Input from "../components/Input";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="left">
        <h2>Contact Form</h2>
        <p>Fill the form and our team will get back to you within 24 hours</p>
        <div className="cont cell">
          <span className="icon">
            <PhoneIcon />
          </span>
          <div>+254712345678</div>
        </div>
        <div className="cont mail">
          <span className="icon">
            <EmailIcon />
          </span>
          <div>hftn@gmail.com</div>
        </div>
        <div className="blob-section"></div>
        <div className="social-media">
          <span>F</span>
          <span>T</span>
          <span>I</span>
        </div>
      </div>

      <div className="right">
        <form>
          <div className="input-widget">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="input-widget">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>

          <div className="input-widget">
            <label htmlFor="cell">Cell</label>
            <input type="text" id="cell" name="cell" />
          </div>

          <div className="input-widget">
            <label htmlFor="msg">Message</label>
            <textarea name="message" id="msg"></textarea>
          </div>

          <button type="submit" className="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;