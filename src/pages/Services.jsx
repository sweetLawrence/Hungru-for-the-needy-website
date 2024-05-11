import React from 'react'
import '../styles/services.css'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <div className='services'>
        <div className="title-section">
            <h2>What We Do</h2>
        </div>
        <div className="service-section">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>
  )
}

export default Services