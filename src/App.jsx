import "./App.css";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import HOME from "./assets/images/home.jpg";
import FloatingDonate from "./components/FloatingDonate";

function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     // setLoading(false);
  //     const timeout = setTimeout(() => {
  //       alert("Image Loaded")
  //       setLoading(false);

  //     }, 5000);
  //   };
  //   img.src = HOME;

  //   // return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500); // Change the delay time as needed

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
          <FloatingDonate />
        </div>
      )}
    </div>
  );
}

export default App;
// --host 192.168.1.188
