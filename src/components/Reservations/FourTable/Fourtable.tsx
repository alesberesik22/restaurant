import React, { useState } from "react";
import "./Fourtable.css";
import { takenStyle, freeStyle } from "../Style";
import ReservationModal from "../ReservationModal/ReservationModal";

function Fourtable(props: any) {
  const [showReservation, setShowReservation] = useState(false);
  const reservateTable = (event: any) => {
    console.log(event.target.id);
    if (event.target.id === props.id) {
      setShowReservation(true);
      console.log("true");
    }
  };
  return (
    <div className="fourtable" id={props.id} onClick={reservateTable}>
      <h2 className="table_number_four" id={props.id}>
        {props.id}
      </h2>
      <h4 className="fourtable_time" id={props.id}>
        14:00 - 16:00
      </h4>
      <h5 className="fourtable_time_name" id={props.id}>
        Ales Beresik
      </h5>
      <div className="table_four" style={takenStyle} id={props.id} />
      <div className="places_four" id={props.id}>
        <div className="sit_one" />
        <div className="sit_two" />
        <div className="sit_three" />
        <div className="sit_four" />
      </div>
      {showReservation && (
        <ReservationModal
          open={true}
          setShowReservation={setShowReservation}
          id={props.id}
        />
      )}
    </div>
  );
}

export default Fourtable;
