import React from "react";
import ReactDOM from "react-dom";
import Trigonometric from "./Trigonometric/index";

class App extends React.Component {
	public render() {
		return (
			<Trigonometric />
		);
	}
}


ReactDOM.render(
	<App />,
	document.getElementById("root")
);
