import "./App.css";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the delay time as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  return (
    <div className="App">
      {/* <BrowserRouter>
        {isMobile() ? <MobileNav /> : <Navbar />}
        <About />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      
       {/* {loading ? <Loading /> : <YourMainComponent />} */}

      {isMobile() ? <MobileNav /> : <Navbar />}
      <Home />
      <MainPage />
      
    </div>
  );
}

export default App;
// --host 192.168.1.188
