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
