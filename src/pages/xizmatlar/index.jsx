import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
  maxWidth: 1200,
  margin: "auto",
  marginTop: 20,
  padding: 20,
  backgroundColor: "#f0f0f0",
  borderRadius: 10,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const StyledTable = styled(Table)({
  minWidth: 800,
});

const HeaderCell = styled(TableCell)({
  fontWeight: "bold",
  backgroundColor: "#1976d2",
  color: "#fff",
  fontSize: 16,
  textAlign: "center",
});

const StyledTableCell = styled(TableCell)({
  fontSize: 14,
  textAlign: "center",
});

const Row = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f9f9f9",
  },
  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
});

const ActionButton = styled(Button)({
  textTransform: "none",
  fontSize: 14,
});

const services = [
  { id: 1, name: "Service 1", price: "$100" },
  { id: 2, name: "Service 2", price: "$200" },
  { id: 3, name: "Service 3", price: "$300" },
  { id: 4, name: "Service 4", price: "$400" },
  { id: 5, name: "Service 5", price: "$500" },
  { id: 6, name: "Service 6", price: "$600" },
  { id: 7, name: "Service 7", price: "$700" },
  { id: 8, name: "Service 8", price: "$800" },
  { id: 9, name: "Service 9", price: "$900" },
  { id: 10, name: "Service 10", price: "$1000" },
];

const Xizmatlar = () => {
  return (
    <Container>
      <TableContainer component={Paper} elevation={3}>
        <StyledTable aria-label="services table">
          <TableHead>
            <TableRow>
              <HeaderCell>T/R</HeaderCell>
              <HeaderCell>Service name</HeaderCell>
              <HeaderCell>Service price</HeaderCell>
              <HeaderCell>Action</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service, index) => (
              <Row key={service.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{service.name}</StyledTableCell>
                <StyledTableCell>{service.price}</StyledTableCell>
                <StyledTableCell>
                  <ActionButton variant="contained" color="primary">
                    View
                  </ActionButton>
                </StyledTableCell>
              </Row>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </Container>
  );
};

export default Xizmatlar;
