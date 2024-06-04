import React from "react";
import "../styles/services.css";

const ServiceCard = ({ icon, image, text, info }) => {
  return (
    <div className="service-card">
      <div className="icon">
        <img src={icon} alt="icon_image" fetchPriority="high" />
      </div>
      <div className="s-card">
        {/* <img src={image} alt="service_image" fetchPriority="high" /> */}
        <p className="desc">{text}</p>
        <p className="info">{info}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
