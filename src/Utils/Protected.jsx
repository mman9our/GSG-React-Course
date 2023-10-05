import { Navigate } from "react-router-dom";
import React from "react";
const Protected = ({ isLoggedIn, children }) => {
	if (!isLoggedIn) {
		return <Navigate to="/signin" replace />;
	}
	return children;
};
export default Protected;
