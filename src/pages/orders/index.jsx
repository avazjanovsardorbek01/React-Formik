// import AddOrder from "../../components/modal/order-modal";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import order from "../../service/order";
// import { useEffect, useState } from "react";
// import { Button } from "@mui/material";

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
//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState(false);

//   const getData = async () => {
//     try {
//       const response = await order.get();
//       if (response.status === 200 && response?.data?.orders_list) {
//         setData(response.data.orders_list);
//       }
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const deleteItem = async (id) => {
//     try {
//       const response = await order.delete(id);
//       if (response.status === 200) {
//         getData(); // O'chirishdan keyin ma'lumotlarni qayta yuklash
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <div className="flex w-full justify-between items-center mb-6">
//         <h1 className="text-2xl">Buyurtmalar</h1>
//         <Button
//           onClick={() => setOpen(true)}
//           variant="contained"
//         >
//           Buyurtma yaratish
//         </Button>
//         <AddOrder open={open} handleClose={handleClose} />
//       </div>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell></StyledTableCell>
//               <StyledTableCell>Miqdori</StyledTableCell>
//               <StyledTableCell>Ism Sharifi</StyledTableCell>
//               <StyledTableCell align="right">Telefon raqami</StyledTableCell>
//               <StyledTableCell align="right">Xizmat ID</StyledTableCell>
//               <StyledTableCell align="right"></StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data &&
//               data.map((row) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell align="right">
//                     <form>
//                       <input type="checkbox" />
//                     </form>
//                   </StyledTableCell>
//                   <StyledTableCell>{row.amount}</StyledTableCell>
//                   <StyledTableCell>{row.client_name}</StyledTableCell>
//                   <StyledTableCell align="right">{row.client_phone_number}</StyledTableCell>
//                   <StyledTableCell align="right">{row.status}</StyledTableCell>
//                   <StyledTableCell align="right">
//                     <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
//                       <DeleteIcon
//                         style={{ cursor: "pointer" }}
//                         onClick={() => deleteItem(row.id)}
//                       />
//                       <EditIcon
//                         style={{ cursor: "pointer" }}
//                         onClick={() => editItem(row)}
//                       />
//                     </div>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Index;

// ================= TEGILMASIN =====================


import AddOrder from "../../components/modal/order-modal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import order from "../../service/order";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

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
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      const response = await order.get();
      if (response.status === 200 && response?.data?.orders_list) {
        setData(response.data.orders_list);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (id) => {
    console.log(`Deleting item with id: ${id}`);
    try {
      const response = await order.delete(id);
      console.log(response);
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl">Buyurtmalar</h1>
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
        >
          Buyurtma yaratish
        </Button>
        <AddOrder open={open} handleClose={handleClose} />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Miqdori</StyledTableCell>
              <StyledTableCell>Ism Sharifi</StyledTableCell>
              <StyledTableCell align="right">Telefon raqami</StyledTableCell>
              <StyledTableCell align="right">Xizmat ID</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="right">
                    <form>
                      <input type="checkbox" />
                    </form>
                  </StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                  <StyledTableCell>{row.client_name}</StyledTableCell>
                  <StyledTableCell align="right">{row.client_phone_number}</StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                  <StyledTableCell align="right">
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                      <DeleteIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteItem(row.id)}
                      />
                      <EditIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => editItem(row)}
                      />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Index;
