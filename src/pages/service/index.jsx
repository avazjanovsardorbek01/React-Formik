import AddService from "../../components/modal/sevice-modal";
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
import service from "../../service/service";
import { useEffect, useState } from "react";
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

  const getService = async () => {
    try {
      const responce = await service.get();
      setServices(responce.data.services);
      if (responce.request === 200 && responce?.data?.service) {
        return responce?.data?.services;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  const [edit, setEdit] = useState({})
  const [open, setOpen] = useState (false)
  const deleteItem =async(id)=> {
    try{
      const responce = await service.delete(id)
      responce.status === 200 && window.location.reload()
    }catch(error){
      console.log(error);
    }
  }
  
  const editItem =(row)=>{
    setEdit(row)
    setOpen(true)

  }
  return (
    <div>
        <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl">Service</h1>
        <AddService/>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>T/R</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services &&
              services.map((row, index) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  {`${row.price} UZS`}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <button onClick={()=>editItem(row.id)}>
                    <EditIcon color="error"/>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={()=>deleteItem(row.id)}>
                    <DeleteIcon color="error"/>
                    </button>
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
