import AddService from "@modal/addmodal";
import EditService from "@modal/editmodal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import service from "../../service/service";
import { useEffect, useState } from "react";
import { Button, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const getService = async () => {
    try {
      const response = await service.get();
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
    getService();
  }, []);

  const deleteItem = async (id) => {
    try {
      const response = await service.delete(id);
      if (response.status === 200) {
        setServices((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = (row) => {
    setEdit(row);
    setOpen(true);
  };

  const handleSave = (updatedItem) => {
    setServices((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setOpen(false);
  };

  return (
    <>
      <EditService item={edit} open={open} handleClose={() => setOpen(false)} onSave={handleSave} />
      <div>
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
                placeholder="Qidiruv"
                inputProps={{ "aria-label": "search services" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <AddService />
        </div>

        {services.length === 0 ? (
          <Table sx={{ minWidth: 700, }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>T/R</StyledTableCell>
              <StyledTableCell>Xizmat nomi</StyledTableCell>
              <StyledTableCell align="center">Xizmat narxi</StyledTableCell>
              <StyledTableCell align="center">Kutish vaqti</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          </Table>
          
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>T/R</StyledTableCell>
                  <StyledTableCell>Xizmat nomi</StyledTableCell>
                  <StyledTableCell align="center">Xizmat narxi</StyledTableCell>
                  <StyledTableCell align="center">Kutish vaqti</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((row, index) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography>30 daqiqa</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <IconButton onClick={() => editItem(row)} color="warning">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => deleteItem(row.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default Index;
