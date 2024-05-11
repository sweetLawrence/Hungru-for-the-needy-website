import React from 'react'
import '../styles/services.css'
import ServiceCard from '../components/ServiceCard'
import PADS from '../assets/images/sanitary.webp'
import MENSES from '../assets/images/menses.png'


const Services = () => {
  return (
    <div className='services'>
        <div className="title-section">
            <h2>What We Do</h2>
        </div>
        <div className="service-section">
            <ServiceCard icon={MENSES} image={PADS} text="Menstrual Hygiene Support"/>
          
        </div>
    </div>
  )
}

export default Services