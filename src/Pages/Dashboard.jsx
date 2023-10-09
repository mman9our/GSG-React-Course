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
import axios from "axios";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
  const [memories, setMemories] = useState([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setMemories(response.data.posts)
    }).catch((error) => {
      console.log("Error Fedching memories", error)
    })
  }, [])


  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }


  const handleDeletePost = (postId) => {
    axios
      .request({
        method: "delete",
        url: "http://16.170.173.197/posts",
        data: {
          id: postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedMemories = memories.filter((memory) => {
          return memory.id !== postId;
        });
        setMemories(updatedMemories);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const handleEditPost = (postId) => {
    const newDiscraption = prompt("please add the new disc");

    axios
      .request({
        method: "put",
        url: "http://16.170.173.197/posts",
        data: {
          id: postId,
          description: newDiscraption,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };


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
          <CreateMemory open={open} handleClose={handleClose} setMemories={setMemories} />
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
                      onClick={() => handleDeletePost(memory.id)}
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
                      onClick={() => handleEditPost(memory.id)}
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
