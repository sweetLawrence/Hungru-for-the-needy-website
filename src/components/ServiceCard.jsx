import React from "react";
import "../styles/services.css";


const ServiceCard = ({ icon, image, text }) => {
  return (
    <div className="service-card">
      <div className="icon">
        <img src={icon} alt="icon_image" />
      </div>
      <div className="s-card">
        <img src={image} alt="service_image" />
        <p className="desc">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
