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

const CreateMemory = ({ open, handleClose, setMemories }) => {
  const [description, setdescription] = useState("");
  const [imageCover, setImageCover] = useState(null);

  const handledescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    console.log("🚀 ~ file: CreateMemory.jsx:33 ~ handleImageChange ~ reader:", reader)
    
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-description"
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
        <form>
          <Input
            placeholder="description"
            value={description}
            onChange={handledescriptionChange}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          {imageCover && (
            <img
              src={imageCover}
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
