import React, { useState } from "react";
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
	Fade,
	Grid,
	IconButton,
	Paper,
	Popper,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import CreateMemory from "../../Components/CreateMemory";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Dashboard = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user"));
	const [open, setOpen] = useState(false);
	const [memories, setMemories] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);

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
	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position="static"
					elevation={12}
					sx={{ backgroundColor: "#121212", boxShadow: "2px 2px 30px #525252" }}
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
						{isLoggedIn ? (
							<Button
								color="inherit"
								onClick={handleLogout}
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
				<CreateMemory
					open={open}
					handleClose={handleClose}
					handleCreateMemory={handleCreateMemory}
				/>
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
									>
										<Button
											onClick={handleMenuOpen}
											sx={{
												maxWidth: "30px",
												maxHeight: "30px",
												minWidth: "20px",
												minHeight: "30px",
												fontFamily: "Signika",
												fontWeight: 900,
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
											<MoreHorizIcon />
										</Button>
										<Menu
											anchorEl={anchorEl}
											open={Boolean(anchorEl)}
											onClose={handleMenuClose}
										>
											<MenuItem onClick={handleMenuClose}>
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}
												>
													<EditIcon />
													<span style={{ paddingLeft: "5px" }}>Edit</span>
												</div>
											</MenuItem>
											<MenuItem onClick={handleMenuClose}>
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}
												>
													<DeleteIcon />
													<span style={{ paddingLeft: "5px" }}>Delete</span>
												</div>
											</MenuItem>
											{/* Add more MenuItems as needed */}
										</Menu>
									</div>
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
										{memory.title}
									</Typography>
								</CardContent>
								<Divider inset="context" />
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Dashboard;
