import "./App.css";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import HOME from "./assets/images/home.jpg";

function App() {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); 
    // setLoading(false); 
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000); // Change the delay time as needed

  //   // Cleanup function to clear the timeout
  //   return () => clearTimeout(timeout);
  // }, []);

  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  return (
    <div className="App">
      <Home home = {HOME} onImageLoaded={handleImageLoaded} />
      {/* <Loading /> */}
      {loading ? (
        <Loading />
      ) : (
        <div className="mpage">
          {isMobile() ? <MobileNav /> : <Navbar />}
          <MainPage />
        </div>
      )}
    </div>
  );
}

export default App;
// --host 192.168.1.188
