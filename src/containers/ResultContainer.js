import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/ResultContainer.css";
class ResultContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var props = {
			status: {
				location: "JAPAN",
				model: "HUMAN A",
				dataset: "HUMAN B"
			}
		};
		return (
			<div className="result-mirror">
				<Row className="result-status-container">
					<Row
						style={{ fontWeight: "bold", textAlign: "center", padding: "4%" }}
					>
						Result Status
					</Row>

					<Col className="header" span={12}>
						Current Location:
					</Col>
					<Col span={12} className="result-status">
						{props.status.location || "-"}
					</Col>

					<Col className="header" span={12}>
						Model:
					</Col>
					<Col span={12} className="result-status">
						{props.status.model || "-"}
					</Col>

					<Col className="header" span={12}>
						Dataset:
					</Col>
					<Col span={12} className="result-status">
						{props.status.dataset || "-"}
					</Col>
				</Row>
				<Row className="result-code-container">
					<Row className="header">Japan Code</Row>
					<Row className="code">
						<code>curl -O xxxx \ </code>
					</Row>
					<Row className="code">
						<code>curl -O xxxx \ </code>
					</Row>
				</Row>
				<Row className="result-code-container">
					<Row className="header">Taiwan Code</Row>
				</Row>
			</div>
		);
	}
}

export default ResultContainer;
