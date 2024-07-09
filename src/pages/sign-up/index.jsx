import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useMask } from "@react-input/mask";
import { Notification } from "../../utils/index";
import { auth } from "../../service/index";
import { VerifyModal } from "../../components/modal";
import { signUpValidationSchema } from "../../utils/validation";

const Index = () => {
  const initialValues = {
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
  };

  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const phone_number = values.phone_number.replace(/\D/g, "");
      const payload = { ...values, phone_number: `+${phone_number}` };
      const response = await auth.sign_up(payload);
      if (response.status === 200) {
        Notification({
          title: response.data.message,
          type: "success",
        });
        setOpen(true);
        setEmail(values.email);
      }
    } catch (error) {
      console.error(error);
      Notification({
        title: "Sign Up Failed",
        type: "error",
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f0f2f5",
      }}
    >
      <VerifyModal
        open={open}
        setOpen={setOpen}
        email={email}
        closeModal={() => setOpen(false)}
      />
      <Typography variant="h1" sx={{ fontSize: "2.5rem", mb: 2, color: "#33" }}>
        Register
      </Typography>
      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signUpValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="full_name"
                type="text"
                as={TextField}
                label="Full Name"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="full_name"
                    component="span"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  />
                }
              />
              <Field
                name="phone_number"
                type="tel"
                as={TextField}
                label="Phone number"
                fullWidth
                margin="normal"
                inputRef={inputRef}
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="phone_number"
                    component="span"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  />
                }
              />
              <Field
                name="email"
                type="email"
                as={TextField}
                label="Email address"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="email"
                    component="span"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  />
                }
              />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                as={TextField}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="password"
                    component="span"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  />
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                sx={{ margin: "15px 0" }}
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </Button>
              <Typography variant="body1" align="center">
                Already have an account?
                <Typography
                  component="span"
                  onClick={() => navigate("/sign-in")}
                  sx={{ color: "#007bff", cursor: "pointer", ml: 1 }}
                >
                  Sign In
                </Typography>
              </Typography>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Index;
