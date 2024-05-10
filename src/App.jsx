import "./App.css";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";

function App() {
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

      {isMobile() ? <MobileNav /> : <Navbar />}
      <Home />
      <MainPage />
      
    </div>
  );
}

export default App;
// --host 192.168.1.188
