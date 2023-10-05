import React, { useState } from "react";
import {
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { Add, AspectRatio } from "@mui/icons-material";
import CreateMemory from "../Components/CreateMemory";
const Dashboard = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user"));
	const [open, setOpen] = useState(false);
	const [memories, setMemories] = useState([]);

	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("user");
		setIsLoggedIn(false);
		navigate("/signin");
	};

	const handleLogin = () => {
		localStorage.setItem("user", "true");
		setIsLoggedIn(true);
	};
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleCreateMemory = (title, image) => {
		setMemories([...memories, { title, image }]);
	};
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="static"
					elevation={12}
					sx={{ backgroundColor: "#313131", boxShadow: "2px 2px 30px white" }}
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
							Memories
						</Typography>
						{isLoggedIn ? (
							<Button
								color="inherit"
								onClick={handleLogout}
								sx={{ fontWeight: 900, fontFamily: "Signika" }}
							>
								Logout
							</Button>
						) : (
							<Button
								color="inherit"
								onClick={handleLogin}
								sx={{ fontWeight: 900, fontFamily: "Signika" }}
							>
								Login
							</Button>
						)}
					</Toolbar>
				</AppBar>
			</Box>
			<br />
			<br />
			<br />
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
						Create a memory 🔮
					</Button>
				</Stack>
				<CreateMemory
					open={open}
					handleClose={handleClose}
					handleCreateMemory={handleCreateMemory}
				/>
			</Box>
			<Container>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					{memories.map((memory, index) => (
						<Card variant="outlined" sx={{ width: 320 }}>
							{console.log(memory.image)}{" "}
							<img src={memory.image} width={400} loading="lazy" alt="" />
							<CardContent>
								<Typography level="title-md">{memory.title}</Typography>
								<Typography level="body-sm">California</Typography>
							</CardContent>
							<Divider inset="context" />
							<CardContent orientation="horizontal">
								<Typography
									level="body-xs"
									fontWeight="md"
									textColor="text.secondary"
								>
									6.3k views
								</Typography>
								<Divider orientation="vertical" />
								<Typography
									level="body-xs"
									fontWeight="md"
									textColor="text.secondary"
								>
									1 hour ago
								</Typography>
							</CardContent>
						</Card>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Dashboard;
