import React from "react";
import About from "./components/About/About";
import Info from "./components/Info/Info";

import Navbar from "./components/Navbar/Navbar";
import SpecialMenu from "./components/SpecialMenu/SpecialMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <About />
      <SpecialMenu />
    </div>
  );
}

export default App;
