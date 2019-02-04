import React, { Component } from "react";
import { Row, Col } from "antd";

class PanelContainer extends Component {
	render() {
		return (
			<div>
				<Row> App Name </Row>
				<Row> 1. Choose model</Row>
				<Row>from japan or tw</Row>
				<Row> model dropdown</Row>
				<Row> 2. Choose dataset</Row>
				<Row>from japan or tw</Row>
				<Row> dataset dropdown</Row>
				<Row> generate button</Row>
			</div>
		);
	}
}

export default PanelContainer;
