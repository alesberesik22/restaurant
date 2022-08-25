import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Findus from "./components/Findus/Findus";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Intro from "./components/Intro/Intro";

import Navbar from "./components/Navbar/Navbar";
import Reservation from "./components/Reservations/ReservationSite/Reservation";
import SpecialMenu from "./components/SpecialMenu/SpecialMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
