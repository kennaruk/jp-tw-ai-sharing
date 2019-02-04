import React, { Component } from "react";
import { Row, Col } from "antd";

import RadioGroup from "../components/RadioGroup";
import Dropdown from "../components/Dropdown";
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
				<Row> App Name </Row>

				<Row> 1. Choose model</Row>

				<Row>
					from <RadioGroup options={countryOptions} />
				</Row>

				<Row>
					Model
					<Dropdown
						placeholder="Select model"
						options={modelOptions}
						width="50%"
					/>
				</Row>

				<Row> 2. Choose dataset</Row>

				<Row>
					from <RadioGroup options={countryOptions} />
				</Row>

				<Row>
					Dataset
					<Dropdown
						placeholder="Select dataset"
						options={datasetOptions}
						width="50%"
					/>
				</Row>

				<Row> generate button</Row>
			</div>
		);
	}
}

export default PanelContainer;
