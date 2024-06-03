import React from 'react'

const Footer = () => {
    let date = new Date().getFullYear();
  return (
    <div className='footer'>
       &copy; {date} Hungry For The Needy Foundation. All rights reserved. 
    </div>
  )
}

export default Footer