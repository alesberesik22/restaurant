import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./Menu.css";

function Menu(props: any) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    props.setShowMenu(false);
  };
  useEffect(() => {
    setOpen(props.open);
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        <Box className="menu_modal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="modal_title"
          >
            Text in a modal
          </Typography>
          <div>text</div>
        </Box>
      </Modal>
    </div>
  );
}

export default Menu;
