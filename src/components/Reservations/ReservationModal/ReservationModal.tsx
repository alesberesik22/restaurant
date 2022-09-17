import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useEffect } from "react";
import axios from "axios";
import { Calendar } from "react-calendar";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import "./ReservationModal.css";

function ReservationModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const [dateSelected, setDateSelected] = React.useState(false);
  const [timeSelected, setTimeSelected] = React.useState("");
  const [date, setDate] = React.useState("");
  const [tableID, setTableID] = React.useState<any>([]);
  const [userInfo, setUserInfo] = React.useState({});
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [buttonColor, setButtonColor] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState<any | null>(null);
  const [calendarValue, setCalendarValue] = React.useState(new Date());

  const handleClose = () => {
    props.setShowReservation(false);
    setOpen(false);
    setDateSelected(false);
  };

  useEffect(() => {
    setOpen(props.open);
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

  const submitClear = () => {
    setUserInfo({});
    setName("");
    setEmail("");
    setNumber("");
    setTimeSelected("");
    setDate("");
    setDateSelected(false);
    setActiveButton(null);
    props.setShowReservation(false);
    setOpen(false);
  };

  const submit = async () => {
    let dateParse = date.split(" ");
    axios.post(
      `http://localhost:5000/${props.id}/${dateParse[0]}/${dateParse[1]}/${timeSelected}`,
      userInfo
    );
    submitClear();
  };

  const calendarChange = (event) => {
    let date = String(event).split(" ");
    setCalendarValue(event);
    setDateSelected(true);
    setDate(date[1] + " " + date[2]);
    setTableID([]);
    axios
      .get(`http://localhost:5000/${props.id}/${date[1]}/${date[2]}`)
      .then((response) => {
        for (let key in response.data[0]) {
          if (
            key !== "id" &&
            Object.keys(response.data[0][String(key)]).length === 0
          ) {
            setTableID((old) => [...old, key]);
          }
        }
      });
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
            <motion.div
              className="time"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
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
            </motion.div>
          </div>
          {timeSelected && date ? (
            <motion.div
              className="reservation_form"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
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
            </motion.div>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}

export default ReservationModal;
