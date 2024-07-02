import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Notification } from "../../utils/index";
import { auth } from "../../service/service";
import { VerifyModal } from "../../components/modal";
import { useMask } from "@react-input/mask";
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
  }, []);

  return (
    <>
      <VerifyModal
        open={open}
        setOpen={setOpen}
        email={email}
        closeModal={() => setOpen(false)}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-4xl  text-center mb-6">Register</h1>
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
                      className="text-red-500 text-sm"
                    />
                  }
                />
                <Field
                  name="phone_number"
                  type="tel"
                  as={TextField}
                  label="Phone Number"
                  fullWidth
                  margin="normal"
                  inputRef={inputRef}
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="phone_number"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  }
                />
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  className="mb-4"
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </Button>
                <div className="text-center">
                  <span>Already have an account?</span>
                  <span
                    onClick={() => navigate("/sign-in")}
                    className="ml-2 text-blue-500 cursor-pointer hover:underline"
                  >
                    Sign In
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Index;
