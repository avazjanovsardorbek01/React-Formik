// import React from "react";
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const AddOrdersModal = ({ open, handleClose, handleSubmit }) => {
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Ismi sharifi majburiy"),
//     type: Yup.string().required("Xizmat turi majburiy"),
//     orderedDate: Yup.date().required("Buyurtirilgan sana majburiy"),
//     completedDate: Yup.date().required("Tugatilgan sana majburiy"),
//     status: Yup.string().required("Status majburiy"),
//     price: Yup.number().required("Narxi majburiy").min(0, "Narxi 0 dan kichik bo'lmasligi kerak"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       type: "",
//       orderedDate: "",
//       completedDate: "",
//       status: "",
//       price: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       handleSubmit(values);
//       formik.resetForm();
//     },
//   });

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Buyurtma Qo'shish</DialogTitle>
//       <form onSubmit={formik.handleSubmit}>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             name="name"
//             label="Ismi sharifi"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.name && Boolean(formik.errors.name)}
//             helperText={formik.touched.name && formik.errors.name}
//           />
//           <TextField
//             margin="dense"
//             name="type"
//             label="Xizmat turi"
//             type="text"
//             fullWidth
//             variant="outlined"
//             value={formik.values.type}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.type && Boolean(formik.errors.type)}
//             helperText={formik.touched.type && formik.errors.type}
//           />
//           <TextField
//             margin="dense"
//             name="orderedDate"
//             label="Buyurtirilgan"
//             type="date"
//             fullWidth
//             variant="outlined"
//             InputLabelProps={{ shrink: true }}
//             value={formik.values.orderedDate}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.orderedDate && Boolean(formik.errors.orderedDate)}
//             helperText={formik.touched.orderedDate && formik.errors.orderedDate}
//           />
//           <TextField
//             margin="dense"
//             name="completedDate"
//             label="Tugatilgan"
//             type="date"
//             fullWidth
//             variant="outlined"
//             InputLabelProps={{ shrink: true }}
//             value={formik.values.completedDate}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.completedDate && Boolean(formik.errors.completedDate)}
//             helperText={formik.touched.completedDate && formik.errors.completedDate}
//           />
//           <TextField
//             margin="dense"
//             name="status"
//             label="Status"
//             select
//             fullWidth
//             variant="outlined"
//             value={formik.values.status}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.status && Boolean(formik.errors.status)}
//             helperText={formik.touched.status && formik.errors.status}
//           >
//             <MenuItem value="Tayyor">Tayyor</MenuItem>
//             <MenuItem value="Olib ketildi">Olib ketildi</MenuItem>
//             <MenuItem value="Tozalanmoqda">Tozalanmoqda</MenuItem>
//           </TextField>
//           <TextField
//             margin="dense"
//             name="price"
//             label="Narxi (so'm)"
//             type="number"
//             fullWidth
//             variant="outlined"
//             value={formik.values.price}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.price && Boolean(formik.errors.price)}
//             helperText={formik.touched.price && formik.errors.price}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="secondary">
//             Bekor qilish
//           </Button>
//           <Button type="submit" color="primary">
//             Saqlash
//           </Button>
//         </DialogActions>
//       </form>
//     </Dialog>
//   );
// };

// export default AddOrdersModal;


import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddOrdersModal = ({ open, handleClose, handleSubmit }) => {
  const validationSchema = Yup.object({
    amount: Yup.number().required("Amount is required").min(1, "Amount must be at least 1"),
    client_full_name: Yup.string().required("Client Full Name is required"),
    client_phone_number: Yup.string().required("Client Phone Number is required"),
    status: Yup.string().required("Status is required"),
  });

  const formik = useFormik({
    initialValues: {
      amount: 1,
      client_full_name: "",
      client_phone_number: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  const statuses = [
    { value: 'ready', label: 'Ready' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'canceled', label: 'Canceled' },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Order</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="outlined"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
          <TextField
            margin="dense"
            name="client_full_name"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formik.values.client_full_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.client_full_name && Boolean(formik.errors.client_full_name)}
            helperText={formik.touched.client_full_name && formik.errors.client_full_name}
          />
          <TextField
            margin="dense"
            name="client_phone_number"
            label="Client Phone Number"
            type="text"
            fullWidth
            variant="outlined"
            value={formik.values.client_phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.client_phone_number && Boolean(formik.errors.client_phone_number)}
            helperText={formik.touched.client_phone_number && formik.errors.client_phone_number}
          />
          <FormControl fullWidth margin="dense" variant="outlined" error={formik.touched.status && Boolean(formik.errors.status)}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              label="Status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {statuses.map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.status && formik.errors.status && (
              <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.status}</div>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddOrdersModal;

