import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Protected from "./Utils/Protected";
function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<h1>Home</h1>} path="/" />
					<Route element={<SignIn />} path="/signin" />
					<Route element={<SignUp />} path="/signup" />
					<Route
						path="/dashboard"
						element={
							<Protected isLoggedIn={isLoggedIn}>
								<Dashboard />
							</Protected>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
