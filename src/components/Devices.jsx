// MUI IMPORTS

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

function Devices() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");
  const [updatedDeviceName, setUpdatedDeviceName] = useState("");
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  const [open, setOpen] = useState(false);
  const [devices, setDevices] = useState([
    { id: uuidv4(), name: "iPhone" },
    { id: uuidv4(), name: "MacBook" },
    { id: uuidv4(), name: "iPad" },
    { id: uuidv4(), name: "Apple Watch" },
  ]);

  const deviceList = devices.map((device) => {
    return (
      <ListItem key={device.id}>
        <Box
          sx={{
            width: 800,
            marginTop: "5px",
            padding: "10px 10px 15px 10px",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "rgb(31, 38, 46)",
            },
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>{device.name}</Box>
          <Box mr={2}>
            <Button
              onClick={() => {
                handleDeleteClick(device.id);
              }}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => {
                handleOpenDialog(device.id);
              }}
              color="secondary"
              variant="outlined"
            >
              Edit
            </Button>
          </Box>
        </Box>
      </ListItem>
    );
  });

  const handleClose = () => {
    setOpen(false);
    setUpdatedDeviceName("");
  };

  const handleOpenDialog = (deviceId) => {
    setSelectedDeviceId(deviceId);
    const deviceToUpdate = devices.find((device) => device.id === deviceId);
    if (deviceToUpdate) {
      setUpdatedDeviceName(deviceToUpdate.name);
    }
    setOpen(true);
  };

  const handleUpdateClick = () => {
    const updatedDevices = devices.map((device) => {
      if (device.id === selectedDeviceId) {
        return { ...device, name: updatedDeviceName };
      }
      return device;
    });
    setDevices(updatedDevices);
    handleClose();
  };

  function handleDeleteClick(id) {
    const newDevices = devices.filter((device) => {
      if (device.id === id) return false;
      return true;
    });
    setDevices(newDevices);
  }

  function handleAddClick() {
    setDevices([...devices, { id: uuidv4(), name: deviceNameInputValue }]);
  }

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>{deviceList}</List>
        <Stack
          sx={{ width: 800, marginTop: "40px" }}
          direction="row"
          spacing={2}
        >
          <TextField
            style={{ width: "80%" }}
            value={deviceNameInputValue}
            onChange={(event) => {
              setDeviceNameInputValue(event.target.value);
            }}
            label="Device Name"
            variant="filled"
            InputLabelProps={{
              style: { color: "#1976d2" },
            }}
            InputProps={{
              style: { borderColor: "white", color: "#1976d2" },
            }}
            focused
          />

          <Button
            style={{ width: "20%" }}
            onClick={handleAddClick}
            variant="outlined"
          >
            Add
          </Button>
        </Stack>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Device Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update the device name, please enter the new name below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="deviceName"
            label="New Device Name"
            type="text"
            fullWidth
            value={updatedDeviceName}
            onChange={(event) => setUpdatedDeviceName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdateClick}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Devices;
