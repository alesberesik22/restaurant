import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useEffect } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReservationModal.css";

function ReservationModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const [dateSelected, setDateSelected] = React.useState(false);
  const [timeSelected, setTimeSelected] = React.useState("");
  const [date, setDate] = React.useState("");
  const [tableID, setTableID] = React.useState([]);
  const [userInfo, setUserInfo] = React.useState({});
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [buttonColor, setButtonColor] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState<any | null>(null);
  const [calendarValue, setCalendarValue] = React.useState(new Date());

  const times01 = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
  ];
  const times02 = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
  ];
  const times03 = [
    "08:00 - 9:00",
    "10:00 - 11:00",
    "12:00 - 13:00",
    "14:00 - 15:00",
    "16:00 - 17:00",
    "18:00 - 29:00",
  ];
  const times04 = ["08:00 - 9:00", "18:00 - 29:00"];

  const handleClose = () => {
    props.setShowReservation(false);
    setOpen(false);
    setDateSelected(false);
  };

  useEffect(() => {
    setOpen(props.open);
    setTableID(eval("times" + props.id));
  }, []);

  const getReservationData = (event: any) => {
    if (event.target.name === "name") {
      setName(event.target.value);
      setUserInfo({
        name: event.target.value,
        email: email,
        number: number,
      });
    }
    if (event.target.name === "email") {
      setEmail(event.target.value);
      setUserInfo({
        name: name,
        email: event.target.value,
        number: number,
      });
    }
    if (event.target.name === "number") {
      setNumber(event.target.value);
      setUserInfo({
        name: name,
        email: email,
        number: event.target.value,
      });
    }
  };
  const changeColor = () => {
    setButtonColor((current) => !current);
  };

  const submit = () => {
    console.log(userInfo);
    setUserInfo({});
    setName("");
    setEmail("");
    setNumber("");
    setTimeSelected("");
    setDate("");
    setDateSelected(false);
    setActiveButton(null);
  };

  const calendarChange = (event) => {
    let date = String(event).split(" ");
    console.log("times" + props.id);
    console.log(date[1] + date[2]);
    setCalendarValue(event);
    setDateSelected(true);
    setDate(date[1] + " " + date[2]);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="reservation_modal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="reservation_title"
          >
            Table Reservation
          </Typography>
          <div className="calendar_modal">
            <div className="calendar">
              <Calendar
                onChange={calendarChange}
                value={calendarValue}
                minDate={new Date()}
              />
            </div>
            <div className="time">
              {dateSelected && tableID
                ? tableID.map((time, i) => {
                    return (
                      <button
                        key={time}
                        className="button_time"
                        style={{
                          backgroundColor:
                            i === activeButton ? "#DCCA87" : "#F5EFDB",
                        }}
                        onClick={() => {
                          setTimeSelected(time);
                          changeColor();
                          setActiveButton(i);
                        }}
                      >
                        {time}
                      </button>
                    );
                  })
                : null}
            </div>
          </div>
          {timeSelected && date ? (
            <div className="reservation_form">
              <form>
                <input
                  type={"text"}
                  name="name"
                  placeholder="Enter your name"
                  required
                  onChange={getReservationData}
                  value={name}
                />
                <input
                  type={"text"}
                  name="email"
                  placeholder="Enter your email"
                  onChange={getReservationData}
                  value={email}
                  required
                />
                <input
                  type={"text"}
                  name="number"
                  placeholder="Enter your number"
                  onChange={getReservationData}
                  value={number}
                  required
                />
                <button
                  typeof="button"
                  className="send_button"
                  onClick={submit}
                >
                  Send reservation
                </button>
              </form>
            </div>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}

export default ReservationModal;
