import React, { useRef, useState } from "react";
import "../styles/contacts.css";
import emailjs from "@emailjs/browser";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Toaster, toast } from "sonner";

const Contacts = () => {
  const [sentStatus, setSentStatus] = useState(false);

  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gd73or",
        "template_824wu7f",
        form.current,
        "-8ZfrslCkIVcHkhaM"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent successfully", {
            className: "success-toast",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email", {
            className: "success-toast",
          });
        }
      );
    setSentStatus(!sentStatus);
    e.target.reset();
  }
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <h2>Contact Form</h2>
        <p>Fill the form and our team will get back to you within 24 hours</p>
        <div className="cont cell">
          <span className="icon">
            <PhoneIcon />
          </span>
          <div>+254759865680</div>
        </div>
        <div className="cont mail">
          <span className="icon">
            <EmailIcon />
          </span>
          <a
            className="e-link"
            href="mailto:hungryfortheneedy@gmail.com?subject=Enquiry%20Here"
          >
            hungryfortheneedy@gmail.com
          </a>
        </div>
        <div className="blob-section"></div>
        <div className="social-media">
          <span>
            <a className="e-link" href="" target="_blank">
              <FacebookIcon />
            </a>
          </span>
          <span>
            <a className="e-link" href="" target="_blank">
              <XIcon />
            </a>
          </span>
          <span>
            <a
              className="e-link"
              href="https://www.instagram.com/hungry_fortheneedy?utm_source=qr&igsh=MTZoNmN2ZWIwb3o5MA== "
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </span>
        </div>
      </div>

      <div className="right">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="input-widget">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="input-widget">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              // required
            />
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
      {/* <Toaster
        richColors
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
};

export default Contacts;
