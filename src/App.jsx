import "./App.css";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500); 

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

