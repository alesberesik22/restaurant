import React from "react";

import "./Subhead.css";

import spoon from "../../assets/images/spoon.png";

function Subhead(props: any) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="subhead_title">{props.title}</p>
      <img src={spoon} alt={"spoon"} className="subhead_spoon" />
    </div>
  );
}

export default Subhead;
