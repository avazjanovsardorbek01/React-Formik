// import * as React from 'react';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';
// import { Button, IconButton, InputBase, Paper } from '@mui/material';
// import { GridSearchIcon } from '@mui/x-data-grid';

// export default function Variants() {
//   return (
//     <>
//      <div className="py-3 flex justify-between items-center">
//         <div className="w-96">
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: 400,
//             }}
//           >
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Qidiruv"
//               inputProps={{ "aria-label": "search google maps" }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <GridSearchIcon />
//             </IconButton>
//           </Paper>
//         </div>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setModal(true)}
//         >
//           buyurtma qo'shish
//         </Button>
//       </div>
//     <Stack spacing={1}>
//       <Skeleton variant="rectangular" width={1250} height={40} />
//       <Skeleton variant="rounded" flex width={1250} height={40} />
//       <Skeleton variant="rounded" width={1250} height={40} />
//       <Skeleton variant="rounded" width={1250} height={40} />
//       <Skeleton variant="rounded" width={1250} height={40} />
//       <Skeleton variant="rounded" width={1250} height={40} />
//       <Skeleton variant="rounded" width={1250} height={40} />
//       <Skeleton variant="rounded" width={1250} height={40} />
//       <Skeleton variant="rounded" width={1250} height={40} />
//     </Stack>
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import service from "../../service/service";
// import { Button, InputBase } from "@mui/material";
// import { GridSearchIcon } from "@mui/x-data-grid";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const ServicesTable = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await service.get();
//         setServices(response.data.services); 
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleEdit = (id) => {
//     console.log("Edit", id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await service.delete(id);
//       if (response.status === 200) {
//         setServices((prev) => prev.filter((item) => item.id !== id));
//       }
//     } catch (error) {
//       console.error("Error deleting item", error);
//     }
//   };

//   return (
//     <>
//       <div className="py-3 flex justify-between items-center">
//         <div className="w-96">
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: 400,
//             }}
//           >
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Qidiruv"
//               inputProps={{ "aria-label": "search google maps" }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <GridSearchIcon />
//             </IconButton>
//           </Paper>
//         </div>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => setModal(true)}
//         >
//           buyurtma qo'shish
//         </Button>
//       </div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Ismi sharifi</StyledTableCell>
//               <StyledTableCell>Xizmat turi</StyledTableCell>
//               <StyledTableCell>Buyurtirilgan</StyledTableCell>
//               <StyledTableCell>Tugatilgan</StyledTableCell>
//               <StyledTableCell>Status</StyledTableCell>
//               <StyledTableCell>Narxi (so'm)</StyledTableCell>
//               <StyledTableCell align="center">Actions</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           {/* <TableBody>
//           {services.map((service) => (
//             <StyledTableRow key={service.id}>
//               <StyledTableCell>{service.name}</StyledTableCell>
//               <StyledTableCell>{service.type}</StyledTableCell>
//               <StyledTableCell>{service.orderedDate}</StyledTableCell>
//               <StyledTableCell>{service.completedDate}</StyledTableCell>
//               <StyledTableCell>{service.status}</StyledTableCell>
//               <StyledTableCell>{service.price}</StyledTableCell>
//               <StyledTableCell align="center">
//               <IconButton onClick={() => handleEdit(service.id)} color="primary">
//               <EditIcon />
//               </IconButton>
//               <IconButton onClick={() => handleDelete(service.id)} color="secondary">
//               <DeleteIcon />
//               </IconButton>
//               </StyledTableCell>
//               </StyledTableRow>
//               ))}
//             </TableBody> */}
//         </Table>
//       </TableContainer>
//     </>
//   );
// };

// export default ServicesTable;


// // ServicesTable.js
// import React, { useEffect, useState } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import service from "../../service/service";
// import { Button, InputBase } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddServiceModal from "@modal/orders"
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const Index = () => {
//   const [services, setServices] = useState([]);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await service.get();
//         setServices(response.data.services);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleEdit = (id) => {
//     console.log("Edit", id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await service.delete(id);
//       if (response.status === 200) {
//         setServices((prev) => prev.filter((item) => item.id !== id));
//       }
//     } catch (error) {
//       console.error("Error deleting item", error);
//     }
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = async (newService) => {
//     try {
//       const response = await service.post(newService);
//       if (response.status === 200) {
//         setServices((prev) => [...prev, response.data]);
//         handleClose();
//       }
//     } catch (error) {
//       console.error("Error adding new service", error);
//     }
//   };

//   return (
//     <>
//       <div className="py-3 flex justify-between items-center">
//         <div className="w-96">
//           <Paper
//             component="form"
//             sx={{
//               p: "2px 4px",
//               display: "flex",
//               alignItems: "center",
//               width: 400,
//             }}
//           >
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Qidiruv"
//               inputProps={{ "aria-label": "search google maps" }}
//             />
//             <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//               <SearchIcon />
//             </IconButton>
//           </Paper>
//         </div>
//         <Button variant="contained" color="primary" onClick={handleOpen}>
//           buyurtma qo'shish
//         </Button>
//       </div>

//       <AddServiceModal open={open} handleClose={handleClose} handleSubmit={handleSubmit} />

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Ismi sharifi</StyledTableCell>
//               <StyledTableCell>Xizmat turi</StyledTableCell>
//               <StyledTableCell>Buyurtirilgan</StyledTableCell>
//               <StyledTableCell>Tugatilgan</StyledTableCell>
//               <StyledTableCell>Status</StyledTableCell>
//               <StyledTableCell>Narxi (so'm)</StyledTableCell>
//               <StyledTableCell align="center">Actions</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           {/* <TableBody>
//             {services.map((service) => (
//               <StyledTableRow key={service.id}>
//                 <StyledTableCell>{service.name}</StyledTableCell>
//                 <StyledTableCell>{service.type}</StyledTableCell>
//                 <StyledTableCell>{service.orderedDate}</StyledTableCell>
//                 <StyledTableCell>{service.completedDate}</StyledTableCell>
//                 <StyledTableCell>{service.status}</StyledTableCell>
//                 <StyledTableCell>{service.price}</StyledTableCell>
//                 <StyledTableCell align="center">
//                   <IconButton onClick={() => handleEdit(service.id)} color="primary">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton onClick={() => handleDelete(service.id)} color="secondary">
//                     <DeleteIcon />
//                   </IconButton>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody> */}
//         </Table>
//       </TableContainer>
//     </>
//   );
// };

// export default Index;


import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import service from "../../service/service";
import { Button, InputBase } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";
import AddOrdersModal from "@modal/orders"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Index = () => {
  const [services, setServices] = useState([]);
  // const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await service.get();
  //       setServices(response.data.services); 
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };

    const getOrders = async () => {
      try {
        const response = await orders.get();
        if (response.data && response.data.services) {
          setServices(response.data.services);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      getOrders();
    },[]);

  const handleEdit = (id) => {
    console.log("Edit", id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await service.delete(id);
      if (response.status === 200) {
        setServices((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  const handleAddOrder = (newOrder) => {
    setServices((prev) => [...prev, newOrder]);
    setOpen(false);
  };

  return (
    <>
      <AddOrdersModal open={open} handleClose={() => setOpen(false)} handleSubmit={handleAddOrder} />
      <div className="py-3 flex justify-between items-center">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <GridSearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add Order
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell> Full Name</StyledTableCell>
              <StyledTableCell>Client Phone Number</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <StyledTableRow key={service.id}>
                <StyledTableCell>{service.amount}</StyledTableCell>
                <StyledTableCell>{service.client_full_name}</StyledTableCell>
                <StyledTableCell>{service.client_phone_number}</StyledTableCell>
                <StyledTableCell>{service.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton onClick={() => handleEdit(service.id)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(service.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Index;
