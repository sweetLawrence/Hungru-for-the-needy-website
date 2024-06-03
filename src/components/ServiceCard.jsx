import React from "react";
import "../styles/services.css";


const ServiceCard = ({ icon, image, text }) => {
  return (
    <div className="service-card">
      <div className="icon">
        <img src={icon} alt="icon_image" loading="lazy"/>
      </div>
      <div className="s-card">
        <img src={image} alt="service_image" loading="lazy"/>
        <p className="desc">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
