import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import CreateMemory from "../Components/CreateMemory";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const [memories, setMorries] = useState([
    {
      id: 1,
      description: "This is the content",
      image:
        "https://images.unsplash.com/photo-1543261207-e5f1837778c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1, marginBottom: "10vh" }}>
          <AppBar
            position="static"
            elevation={12}
            sx={{
              backgroundColor: "#121212",
              boxShadow: "2px 2px 30px #525252",
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 500, fontFamily: "Signika" }}
              >
                <h1>
                  <span>M</span>E<span>mories</span>
                </h1>
              </Typography>

              <Button
                onClick={handleLogout}
                color="inherit"
                sx={{
                  fontFamily: "Signika",
                  fontWeight: 900,
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white",
                  ":hover": {
                    bgcolor: "#212121",
                    color: "white",
                  },
                  "&:active": {
                    boxShadow: "none",
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              onClick={handleOpen}
              startIcon={<AddIcon />}
              sx={{
                fontFamily: "Signika",
                fontWeight: 900,
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "10px",
                fontSize: "14px",
                color: "black",
                backgroundColor: "white",
                ":hover": {
                  border: "1px solid white",
                  bgcolor: "#212121",
                  color: "white",
                },
                "&:active": {
                  boxShadow: "none",
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Create a memory 🔮
            </Button>
          </Stack>
          <CreateMemory open={open} handleClose={handleClose} />
        </Box>
        <Divider light />
        <Container>
          <Grid container spacing={2} sx={{ marginTop: "50px" }}>
            {memories.map((memory, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    width: "100%",
                    height: "100%", // Change height to 100%
                    border: "1px solid white",
                    backgroundColor: "#f2f2f2",
                    position: "relative",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <Button
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "red",
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "blue",
                      }}
                    >
                      <EditNoteIcon />
                    </Button>
                  </Stack>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        margin: "10px",
                        position: "absolute",
                        zIndex: 1,
                        backgroundColor: "white",
                        borderRadius: "5px",
                        top: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    ></div>
                    <div>
                      <CardMedia
                        component="img"
                        image={memory.image}
                        sx={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
                        }}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <CardContent>
                    <Typography style={{ fontFamily: "Signika" }}>
                      {memory.description}
                    </Typography>
                  </CardContent>
                  <Divider inset="context" />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
