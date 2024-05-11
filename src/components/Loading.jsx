import React, { useState, useEffect } from 'react';
import 'animate.css';
// import './Loading.css'; // Import CSS file for loading animation
import charityLogo from '../assets/images/hftn-logo.png'; // Import your charity logo

const Loading = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage(prevPercentage => {
        const newPercentage = prevPercentage + 20;
        return newPercentage >= 100 ? 100 : newPercentage;
      });
    }, 1000);

    // Clear interval after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const loadingBarStyle = {
    width: `${loadingPercentage}%`,
    backgroundColor: loadingPercentage === 100 ? '#4CAF50' : '#2196F3',
  };

  return (
    <div className='loading animate__animated animate__zoomIn'>
      <img src={charityLogo} alt="Charity Logo" className="x-logo" />
      <div className="loading-bar">
        <div className="loading-bar-inner" style={loadingBarStyle}>
          {loadingPercentage}%
        </div>
      </div>
      {/* {loadingPercentage === 100 && <div>Loading completed!</div>} */}
    </div>
  );
};

export default Loading;
