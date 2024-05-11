import "./App.css";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      // List of image URLs to preload
      const imageUrls = [
        "./assets/images/home.jpg",
        "./assets/images/donate.jpg",
        "./assets/images/charity.webp",
      
      ];

      // Create image objects and load them in the background
      const images = [];
      for (let i = 0; i < imageUrls.length; i++) {
        const img = new Image();
        img.src = imageUrls[i];
        images.push(img);
      }

      // Check if all images are loaded
      let loadedCount = 0;
      images.forEach((img) => {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imageUrls.length) {
            // All images are loaded
            setLoading(false);
          }
        };
      });
    };

    preloadImages();

    // Cleanup function
    return () => {
      // Cancel image loading (if needed)
    };
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000); // Change the delay time as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="mpage">
          {isMobile() ? <MobileNav /> : <Navbar />}
          <Home />
          <MainPage />
        </div>
      )}
    </div>
  );
}

export default App;
// --host 192.168.1.188
