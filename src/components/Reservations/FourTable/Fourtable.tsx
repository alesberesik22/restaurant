import React from "react";
import "./Fourtable.css";

function Fourtable() {
  const takenStyle = {
    background:
      "linear-gradient(to right, rgba(252,2,2,0.7) 4%, rgba(255,255,255,0.17) 0",
  };
  const freeStyle = {
    background:
      "linear-gradient(to right, rgba(32, 250, 3, 0.7) 4%, rgba(255,255,255,0.17) 0",
  };
  const reservateTable = (event: any) => {
    if (event.target.id === "01") {
      console.log("01");
    }
  };
  return (
    <div
      className="twotable"
      id="01"
      onClick={(event) => reservateTable(event)}
    >
      <h2 className="table_number">01</h2>
      <div className="table_four" style={freeStyle} />
      <div className="places_four">
        <div className="sit_one" />
        <div className="sit_two" />
        <div className="sit_three" />
        <div className="sit_four" />
      </div>
    </div>
  );
}

export default Fourtable;
