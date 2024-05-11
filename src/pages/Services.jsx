import React from 'react'
import '../styles/services.css'
import ServiceCard from '../components/ServiceCard'
import PADS from '../assets/images/sanitary.webp'
import MENSES from '../assets/images/menses.png'
import FEEDING from '../assets/images/feeding.webp'
import FOODICON from '../assets/images/foodicon.png'
import MENTORSHIP from '../assets/images/donate.jpg'
import MENTORSHIPICON from '../assets/images/mentorshipicon.png'
import CLEANUPICON from '../assets/images/cleanupicon.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="title-section">
            <h2>What We Do</h2>
        </div>
        <div className="service-section">
            <ServiceCard icon={MENSES} image={PADS} text="Menstrual Hygiene Support"/>
            <ServiceCard icon={FOODICON} image={FEEDING} text="Food Assistance"/>
            <ServiceCard icon={MENTORSHIPICON} image={MENTORSHIP} text="Mentorship Programs"/>
            <ServiceCard icon={CLEANUPICON} image={MENTORSHIP} text="Community Cleanup"/>
            {/* <ServiceCard icon={MENTORSHIPICON} image={MENTORSHIP} text="Mentorship Programs"/> */}
            {/* <ServiceCard icon={MENTORSHIPICON} image={MENTORSHIP} text="Mentorship Programs"/> */}
          
        </div>
    </div>
  )
}

export default Services