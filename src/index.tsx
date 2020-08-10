import React from "react";
import ReactDom from "react-dom";
import Trigonometric from "./Trigonometric/index";

import "destyle.css";
import "./css/main.css";

class App extends React.Component {
	public render() {
		return <Trigonometric />;
	}
}

ReactDom.render(<App />, document.getElementById("root"));
