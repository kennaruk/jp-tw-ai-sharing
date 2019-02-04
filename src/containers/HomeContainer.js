import React, { Component } from "react";
import { Col } from "antd";

import PanelContainer from "./PanelContainer";
import ResultContainer from "./ResultContainer";

class Home extends Component {
	render() {
		return (
			<div>
				<Col span={12}>
					<PanelContainer />
				</Col>
				<Col span={12}>
					<ResultContainer />
				</Col>
			</div>
		);
	}
}

export default Home;
