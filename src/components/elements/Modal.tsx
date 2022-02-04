import { Box, Modal } from "@mui/material";
import React, { ReactNode } from "react";

interface IModal {
  children: ReactNode;
  handleClose: () => void;
  open: boolean;
}

const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
};

const ModalComponent = ({ children, handleClose, open }: IModal) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ background: "white" }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>{children}</Box>
    </Modal>
  );
};

export default ModalComponent;
