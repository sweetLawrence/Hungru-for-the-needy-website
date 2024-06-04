import React from "react";
import "../styles/services.css";
import ServiceCard from "../components/ServiceCard";
import PADS from "../assets/images/sanitary.webp";
import MENSES from "../assets/images/menses.png";
import FEEDING from "../assets/images/feeding.webp";
import FOODICON from "../assets/images/foodicon.png";
import MENTORSHIP from "../assets/images/donate.webp";
import MENTORSHIPICON from "../assets/images/mentorshipicon.png";
import CLEANUPICON from "../assets/images/cleanupicon.png";
import CLEANUP from "../assets/images/commcleanup.png";
import SCHOLARICON from "../assets/images/scholaricon.png";
import SCHOLARSHIP from "../assets/images/scholarship.png";
import CAMP from "../assets/images/medicalcamp.png";
import CAMPICON from "../assets/images/campicon.png";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="title-section">
        <h2>What We Do</h2>
      </div>
      <div className="service-section">
        <ServiceCard
          icon={MENSES}
          image={PADS}
          text="Menstrual Hygiene Support"
          info="We distribute sanitary pads and educational materials to women and girls in need. This helps them manage their periods safely and hygienically,
           allowing them to stay in school, work, and participate fully in their lives."
        />
        <ServiceCard
          icon={FOODICON}
          image={FEEDING}
          text="Food Assistance"
          info="We provide food assistance through regular distributions of nutritious food parcels, partnerships to bring fresh produce, and community kitchens serving hot meals to those most vulnerable."
        />
        <ServiceCard
          icon={MENTORSHIPICON}
          image={MENTORSHIP}
          text="Mentorship Programs"
          info="We focus on building self-confidence, 
          developing valuable skills, and achieving educational or career goals to help mentees navigate their personal and professional journeys."
        />
        <ServiceCard
          icon={CLEANUPICON}
          image={CLEANUP}
          text="Community Cleanup"
          info="We work together with residents and volunteers to remove litter, clear overgrown areas, 
          and beautify our neighborhoods. "
        />
        <ServiceCard
          icon={SCHOLARICON}
          image={SCHOLARSHIP}
          text="Schorlaship Opportunities"
          info="Empowering futures! We offer scholarships for [areas of focus] to help students overcome financial barriers and achieve their academic dreams"
        />
        <ServiceCard
          icon={CAMPICON}
          image={CAMP}
          text="Medical Camps"
          info="We organize free or low-cost health clinics in underserved areas.These camps offer general checkups, screenings for common illnesses, dental care, and basic medications."
        />
      </div>
    </div>
  );
};

export default Services;
