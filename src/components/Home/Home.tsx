import React from "react";
import About from "../About/About";
import Awards from "../Awards/Awards";
import Findus from "../Findus/Findus";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";
import Intro from "../Intro/Intro";
import Navbar from "../Navbar/Navbar";
import SpecialMenu from "../SpecialMenu/SpecialMenu";

function Home() {
  return (
    <>
      <Info />
      <About />
      <SpecialMenu />
      <Intro />
      <Awards />
      <Gallery />
      <Findus />
      <Footer />
    </>
  );
}

export default Home;
