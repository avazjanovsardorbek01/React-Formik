// src/components/modal/index.jsx
import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const ForgotPasswordModal = ({ open, handleClose, handleSendCode }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    handleSendCode(email);
    handleClose(); // Закрываем модальное окно после отправки кода
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Reset Password
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="contained" fullWidth>
          Send Code
        </Button>
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;
