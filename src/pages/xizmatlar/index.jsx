import React, { useState } from "react";
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
  Modal,
  TextField,
  Typography,
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
  margin: "0 5px",
});

// Initial services data (replace with API integration)
let initialServices = [
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
  const [openModal, setOpenModal] = useState(false);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServicePrice, setNewServicePrice] = useState("");
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [services, setServices] = useState(initialServices); // State for services

  const handleAddClick = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setNewServiceName("");
    setNewServicePrice("");
    setEditingServiceId(null);
  };

  const handleAddService = () => {
    // Logic to add the new service to your services array or API
    const newService = {
      id: services.length + 1,
      name: newServiceName,
      price: newServicePrice,
    };

    setServices([...services, newService]);

    // After adding, close the modal
    handleModalClose();
  };

  const handleEditClick = (id) => {
    setEditingServiceId(id);
    setOpenModal(true);
    // Optionally, prefill the modal fields with existing data
    const serviceToEdit = services.find((service) => service.id === id);
    if (serviceToEdit) {
      setNewServiceName(serviceToEdit.name);
      setNewServicePrice(serviceToEdit.price);
    }
  };

  const handleEditService = () => {
    // Logic to edit the service in your services array or API
    const updatedServices = services.map((service) =>
      service.id === editingServiceId
        ? { ...service, name: newServiceName, price: newServicePrice }
        : service
    );
    setServices(updatedServices);

    // After editing, close the modal
    handleModalClose();
  };

  const handleDeleteClick = (id) => {
    // Logic to delete the service from your services array or API
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddClick}
          sx={{ textTransform: "none", fontSize: 14 }}
        >
          Add
        </Button>
      </Box>
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
                  <ActionButton
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(service.id)}
                  >
                    Edit
                  </ActionButton>
                  <ActionButton
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteClick(service.id)}
                  >
                    Delete
                  </ActionButton>
                </StyledTableCell>
              </Row>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>

      {/* Modal for adding or editing a service */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="add-edit-service-modal-title"
        aria-describedby="add-edit-service-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper sx={{ p: 3, maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            {editingServiceId ? "Edit Service" : "Add New Service"}
          </Typography>
          <TextField
            label="Service Name"
            value={newServiceName}
            onChange={(e) => setNewServiceName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Service Price"
            value={newServicePrice}
            onChange={(e) => setNewServicePrice(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleModalClose} sx={{ marginRight: 1 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={editingServiceId ? handleEditService : handleAddService}
            >
              {editingServiceId ? "Save Changes" : "Add Service"}
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Container>
  );
};

export default Xizmatlar;
