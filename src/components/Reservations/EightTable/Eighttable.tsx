import React from "react";
import "./Eighttable.css";
import { freeStyle, takenStyle } from "../Style";

function Eighttable(props: any) {
  return (
    <div className="eighttable" id={props.id}>
      <h2 className="table_number_eight" id={props.id}>
        {props.id}
      </h2>
      <h4 className="eighttable_time" id={props.id}>
        14:00 - 16:00
      </h4>
      <h5 className="eighttable_time_name" id={props.id}>
        Ales Beresik
      </h5>
      <div className="table_eight" style={freeStyle} id={props.id} />
      <div className="places_eight" id={props.id}>
        <div className="sit_one" />
        <div className="sit_two" />
        <div className="sit_three" />
        <div className="sit_four" />
        <div className="sit_five" />
        <div className="sit_six" />
        <div className="sit_seven" />
        <div className="sit_eight" />
      </div>
    </div>
  );
}

export default Eighttable;
