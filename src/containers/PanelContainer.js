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
	{ value: "id-1", text: "JAPANESE FACE DATASET - 28GB" }
];

class PanelContainer extends Component {
	render() {
		return (
			<div>
				<Row className="panel-container"> App Name </Row>

				<Row className="panel-container"> 1. Choose model</Row>

				<Row className="panel-container">
					from <RadioGroup options={countryOptions} />
				</Row>

				<Row className="panel-container">
					<b>Model</b>
					<Dropdown
						placeholder="Select model"
						options={modelOptions}
						width="50%"
					/>
				</Row>

				<Row className="panel-container"> 2. Choose dataset</Row>

				<Row className="panel-container">
					from <RadioGroup options={countryOptions} />
				</Row>

				<Row className="panel-container">
					Dataset
					<Dropdown
						placeholder="Select dataset"
						options={datasetOptions}
						width="50%"
					/>
				</Row>

				<Row type="flex">
					<Col span={16} />
					<Col span={8} order={1}>
						<Button text="Generate" />
					</Col>
				</Row>
			</div>
		);
	}
}

export default PanelContainer;
