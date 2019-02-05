import React, { Component } from "react";
import { Row, Col } from "antd";

import RadioGroup from "../components/RadioGroup";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

import "./styles/PanelContainer.css";

/*
Mock Data
*/
const countryOptions = [
	{
		value: "jp",
		text: "Japan",
		icon: "img/xx"
	},
	{
		value: "tw",
		text: "Taiwan",
		icon: "img/xx"
	}
];

const modelOptions = [
	{ value: "id-1", text: "FACE RECOGNITION - A Type" },
	{ value: "id-2", text: "FACE RECOGNITION - B Type" }
];

const datasetOptions = [
	{ value: "id-1", text: "THAI FACE DATASET - 10GB" },
	{ value: "id-2", text: "JAPANESE FACE DATASET - 28GB" }
];

const headerStyles = {
	marginLeft: "3%",
	marginTop: "3%"
};

const rightContainerStyles = {
	paddingRight: "3%"
};
class PanelContainer extends Component {
	render() {
		return (
			<div>
				<Row className="panel-header panel-container" justify="center">
					<Col>App Name </Col>
				</Row>

				<Row>
					<h1 style={headerStyles}>1. Choose model</h1>
				</Row>

				<Row className="panel-container">
					<Col className="panel-item" span={6}>
						from
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<RadioGroup options={countryOptions} width="100%" />
					</Col>
				</Row>

				<Row className="panel-container">
					<Col className="panel-item" span={6}>
						Model
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<Dropdown
							placeholder="Select model"
							options={modelOptions}
							width="100%"
							block
						/>
					</Col>
				</Row>

				<Row>
					<h1 style={headerStyles}>2. Choose dataset</h1>
				</Row>

				<Row className="panel-container">
					<Col className="panel-item" span={6}>
						from
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<RadioGroup options={countryOptions} width="100%" />
					</Col>
				</Row>

				<Row className="panel-container" justify="space-around">
					<Col className="panel-item" span={6}>
						Dataset
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<Dropdown
							placeholder="Select dataset"
							options={datasetOptions}
							width="100%"
						/>
					</Col>
				</Row>

				<Row type="flex">
					<Col span={16} />
					<Col span={8} order={1} style={rightContainerStyles}>
						<Button text="Generate" block />
					</Col>
				</Row>
			</div>
		);
	}
}

export default PanelContainer;
