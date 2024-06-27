import React from "react";
import {
  TextField,
  Button,
  Box,
  Link,
  Typography,
  Container,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Index = () => {
  const handleSignIn = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
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
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form style={{ width: "100%" }}>
              <Field
                as={TextField}
                type="email"
                name="email"
                variant="outlined"
                label="Email Address"
                fullWidth
                margin="normal"
                InputProps={{
                  style: { color: "#909090" },
                }}
                error={touched.email && Boolean(errors.email)}
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                variant="outlined"
                label="Password"
                fullWidth
                margin="normal"
                InputProps={{
                  style: { color: "#909090" },
                }}
                error={touched.password && Boolean(errors.password)}
                helperText={<ErrorMessage name="password" />}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 0,
                  mb: 2,
                  px: 3,
                  py: 1.5,
                  fontSize: 16,
                  backgroundColor: "#0d47a1",
                  ":hover": {
                    backgroundColor: "#083b82",
                  },
                }}
                disabled={isSubmitting}
              >
                Sign In
              </Button>
              <Link href="/sign-up" sx={{ textDecoration: "none" }}>
                Register
              </Link>
              <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                Forgot your password?
              </Typography>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Index;
