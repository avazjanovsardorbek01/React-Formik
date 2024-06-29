import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  full_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Required"),
  phone_number: Yup.string()
    .min(19, "Invalid phone number")
    .required("Phone number is required"),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Required"),
});

export const verifyPassValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const updatePassValidationSchema = Yup.object().shape({
  new_password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Required"),
  code: Yup.string().required("Required").trim(),
});
