import React, { Component } from "react";

import WebFont from "webfontloader";

import "antd/dist/antd.css";
import "./index.css";

import Home from "./containers/HomeContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Home />
			</div>
		);
	}
}

export default App;
