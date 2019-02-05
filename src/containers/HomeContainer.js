import React, { Component } from "react";
import { Col } from "antd";

import PanelContainer from "./PanelContainer";
import ResultContainer from "./ResultContainer";

class Home extends Component {
	render() {
		return (
			<div>
				<Col
					span={12}
					style={{ height: "100vh", borderRight: "1px solid #e8e8e8" }}
				>
					<PanelContainer />
				</Col>
				<Col span={12} style={{ height: "100vh" }}>
					<ResultContainer />
				</Col>
			</div>
		);
	}
}

export default Home;
