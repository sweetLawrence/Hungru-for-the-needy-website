import React from 'react'

const Footer = () => {
    let currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
       &copy; {currentYear} Hungry For The Needy Foundation. All rights reserved. 
    </div>
  )
}

export default Footer