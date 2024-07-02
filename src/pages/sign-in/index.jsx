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
import { auth } from "../../service/service";
import { Notification } from "../../utils/index";
import { signInValidationSchema } from "../../utils/validation";

const Index = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        navigate("/");
        localStorage.setItem("access_token", response.data.access_token);
        Notification({
          title: "Sign In Successfully",
          type: "success",
        });
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <Typography variant="h4" className="text-center mb-6 font-bold">
          Login
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
                    className="text-red-500 text-sm"
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
                    className="text-red-500 text-sm"
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
              <div className="flex justify-between items-center mt-2 mb-4">
                <span
                  onClick={() => navigate("/forgot-password")}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Forgot Password?
                </span>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                className="mb-4"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
              <div className="text-center">
                <span>Don't have an account?</span>
                <span
                  onClick={() => navigate("/sign-up")}
                  className="ml-2 text-blue-500 cursor-pointer hover:underline"
                >
                  Register here
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Index;
