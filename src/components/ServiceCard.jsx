import React from 'react'
import '../styles/services.css'
import PADS from '../assets/images/sanitary.webp'
import MENSES from '../assets/images/menses.png'

const ServiceCard = () => {
  return (
    <div className='service-card'>
        <div className="icon">
            <img src={MENSES} alt="icon_image" />
        </div>
        <div className="s-card">
            <img src={PADS} alt="service_image" />
            <p className="desc">Menstrual Hygiene Support</p>
        </div>
    </div>
  )
}

export default ServiceCard