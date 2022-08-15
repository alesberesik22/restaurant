import React from "react";
import About from "./components/About/About";
import Info from "./components/Info/Info";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <About />
    </div>
  );
}

export default App;
