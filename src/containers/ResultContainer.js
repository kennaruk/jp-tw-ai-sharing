import React, { Component } from "react";
import { Row, Col } from "antd";

import "./styles/ResultContainer.css";
class ResultContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			japanCodes: [],
			taiwanCodes: []
		};
	}

	renderCodes = arrayOfCodes => {
		return arrayOfCodes.map((code, i) => (
			<Row className="code" key={i}>
				<code>
					{code}
					{i !== arrayOfCodes.length - 1 ? " && \\" : ""}
				</code>
			</Row>
		));
	};

	render() {
		const props = this.props;
		return (
			<div className="result-mirror">
				<Row className="result-status-container">
					<Row
						style={{ fontWeight: "bold", textAlign: "center", padding: "4%" }}
					>
						Result Status
					</Row>
					<Row>
						<Col className="header" span={8}>
							Current Location:
						</Col>
						<Col span={16} className="result-status">
							{props.location || "-"}
						</Col>
					</Row>

					<Row>
						<Col className="header" span={6}>
							Model:
						</Col>
						<Col span={18} className="result-status">
							{`${props.model.value || "-"} : ${props.model.text ||
								"-"} : ${props.model.country || "-"}`}
						</Col>
					</Row>
					<Row>
						<Col className="header" span={6}>
							Dataset:
						</Col>
						<Col span={18} className="result-status">
							{`${props.dataset.value || "-"} : ${props.dataset.text ||
								"-"} : ${props.dataset.country || "-"}`}
						</Col>
					</Row>
				</Row>
				<Row className="result-code-container">
					<Row className="header">Japan Code</Row>
					{this.props.japanCodes.length === 0 ? (
						<Row className="code">
							<code>-</code>
						</Row>
					) : (
						this.renderCodes(this.props.japanCodes)
					)}
				</Row>
				<Row className="result-code-container">
					<Row className="header">Taiwan Code</Row>
					{this.props.taiwanCodes.length === 0 ? (
						<Row className="code">
							<code>-</code>
						</Row>
					) : (
						this.renderCodes(this.props.taiwanCodes)
					)}
				</Row>
			</div>
		);
	}
}

export default ResultContainer;
