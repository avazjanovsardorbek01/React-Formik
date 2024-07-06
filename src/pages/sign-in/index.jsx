import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { auth } from "../../service/index";
import { Notification } from "../../utils/index";
import { signInValidationSchema } from "../../utils/validation";
import { SignInModal } from "../../components/modal";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        localStorage.setItem("access_token", response?.data?.access_token);
        Notification({
          title: "Sign In Successfully",
          type: "success",
        });
        setTimeout(() => {
          navigate("/");
        }, 2300);
      }
    } catch (error) {
      console.error(error);
      Notification({
        title: "Sign In Failed",
        type: "error",
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <SignInModal open={open} />
      <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <Typography
            variant="h4"
            className="text-center mb-6 font-bold text-blue-600"
          >
            Sign In
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signInValidationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email Address"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-600 text-sm"
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
                      className="text-red-600 text-sm"
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
                <Typography
                  className="mb-4 cursor-pointer hover:text-blue-500 text-right"
                  onClick={() => setOpen(true)}
                >
                  Forgot Password?
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{ marginBottom: "16px", padding: "10px 0" }}
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
                <Typography
                  onClick={() => navigate("/sign-up")}
                  className="text-blue-600 cursor-pointer hover:text-blue-800 text-center"
                >
                  Don't have an account? Sign Up
                </Typography>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignIn;
