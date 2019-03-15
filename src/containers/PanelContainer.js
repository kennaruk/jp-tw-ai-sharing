import React, { Component } from "react";
import { Row, Col, Input, Typography, Spin } from "antd";

import RadioGroup from "../components/RadioGroup";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

import "./styles/PanelContainer.css";

const Search = Input.Search;
const { Text } = Typography;

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

const headerStyles = {
	marginLeft: "3%",
	marginTop: "3%"
};

const rightContainerStyles = {
	paddingRight: "3%"
};

// const verticalAlignCenterStyles = {
// 	display: "inline-flex",
// 	justifyContent: "center",
// 	alignItems: "center"
// };
class PanelContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMetadataLoading: false,
			metadataSearch: ""
		};
	}

	onMetadataSearch = async value => {
		console.log("value", value);
		await this.setState({ isMetadataLoading: true, metadataSearch: value });
		setTimeout(() => {
			this.setState({ isMetadataLoading: false });
		}, 1000);
		// do the filter
	};

	render() {
		console.log(this.props);

		return (
			<div>
				<Row className="panel-header panel-container" justify="center">
					<Col>ABCI Resources sharing code generator</Col>
				</Row>

				<Row>
					<h2 style={headerStyles}>1. Choose model</h2>
				</Row>

				<Row className="panel-container" type="flex" align="middle">
					<Col className="panel-item" span={6}>
						from
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<RadioGroup
							onChange={this.props.onModelCountryChange}
							options={countryOptions}
							width="100%"
						/>
					</Col>
				</Row>

				<Row className="panel-container" type="flex" align="middle">
					<Col className="panel-item" span={6}>
						Model
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<Dropdown
							placeholder="Select model"
							options={this.props.getModelsByCountry(this.props.modelCountry)}
							width="100%"
							block
							value={this.props.model}
							onChange={this.props.onModelChange}
						/>
					</Col>
				</Row>

				<Row>
					<h2 style={headerStyles}>2. Choose dataset</h2>
				</Row>

				<Row className="panel-container" type="flex" align="middle">
					<Col className="panel-item" span={6}>
						from
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<RadioGroup
							options={countryOptions}
							onChange={this.props.onDatasetCountryChange}
							width="100%"
						/>
					</Col>
				</Row>

				<Row className="panel-container" type="flex" align="middle">
					<Col className="panel-item" span={6}>
						<Text>Metadata search </Text>
					</Col>
					<Col span={18} style={rightContainerStyles}>
						<Spin size="small" spinning={this.state.isMetadataLoading}>
							<Search
								placeholder="ex. FACE DATASET, FRUIT DATASET"
								enterButton="Search"
								onSearch={this.onMetadataSearch}
							/>
						</Spin>
					</Col>
				</Row>

				<Row className="panel-container" type="flex" align="middle">
					<Col className="panel-item" span={6}>
						Dataset
					</Col>
					<Col span={18} style={rightContainerStyles}>
						{this.props.getDatasetByCountry ? (
							<Dropdown
								placeholder="Select dataset"
								options={this.props.getDatasetByCountry(
									this.props.datasetCountry,
									this.state.metadataSearch
								)}
								width="100%"
								value={this.props.dataset}
								onChange={this.props.onDatasetChange}
							/>
						) : (
							""
						)}
					</Col>
				</Row>

				<Row type="flex">
					<Col span={16} />
					<Col span={8} order={1} style={rightContainerStyles}>
						<Button
							text="Generate"
							block
							onClick={this.props.onGenerateSubmit}
							loading={this.props.generateLoading}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PanelContainer;
