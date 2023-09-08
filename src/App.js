import React from "react";
import AppChild from "./components/AppChild";

const App = () => {
	return (
		<div>
			<AppChild appChildId={1} innerChildId={2} />
		</div>
	);
};

export default App;
