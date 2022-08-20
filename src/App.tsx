import React from "react";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Info from "./components/Info/Info";
import Intro from "./components/Intro/Intro";

import Navbar from "./components/Navbar/Navbar";
import SpecialMenu from "./components/SpecialMenu/SpecialMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <About />
      <SpecialMenu />
      <Intro />
      <Awards />
    </div>
  );
}

export default App;
