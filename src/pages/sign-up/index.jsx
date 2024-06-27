import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";
import { auth } from "@service";
import CleaningModal from "../../components/modal";

const Index = () => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.sign_up(form);
      if (response.status === 200) {
        setModal(true);
        localStorage.setItem("email", form.email);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {modal && <CleaningModal open={modal} toggle={() => setModal(false)} />}
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
            border: "1px solid",
            borderColor: "grey.300",
            borderRadius: 2,
            boxShadow: 1,
            backgroundColor: "background.paper",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontSize: 30, mb: 2 }}>
            Sign Up
          </Typography>
          <Box
            component="form"
            id="submit"
            onSubmit={handleSubmit}
            sx={{ width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="full_name"
              id="full_name"
              label="Full Name"
              type="text"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              type="tel"
              name="phone_number"
              id="phone_number"
              label="Phone Number"
              placeholder="+998"
              variant="outlined"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                px: 3,
                py: 1.5,
                fontSize: 16,
                backgroundColor: "#0d47a1",
                ":hover": {
                  backgroundColor: "#083b82",
                },
              }}
            >
              Sign Up
            </Button>
            <Link
              href="/"
              sx={{
                textDecoration: "none",
                // display: "block",
                textAlign: "center",
                mt: 2,
              }}
            >
              Sign In
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Index;
