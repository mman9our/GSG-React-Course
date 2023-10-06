import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f2f2f2",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

const CreateMemory = ({ open, handleClose, handleCreateMemory }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, image });
    handleCreateMemory(title, image);

    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="div"
          sx={{ mb: 2, fontWeight: 900, fontFamily: "Signika" }}
        >
          Create a memory
        </Typography>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          {image && (
            <img
              src={image}
              alt="Uploaded"
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          )}
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              sx={{
                fontFamily: "Signika",

                width: "100%",
                textAlign: "left",
                fontWeight: 900,
                marginBottom: "5px",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "10px",
                fontSize: "14px",
                color: "black",
                backgroundColor: "white",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Upload Image
            </Button>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 900,
              paddingTop: "5px",
              fontFamily: "Signika",

              paddingBottom: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              color: "black",
              backgroundColor: "white",
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Create
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateMemory;
