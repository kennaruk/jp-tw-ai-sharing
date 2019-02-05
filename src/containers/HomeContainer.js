import React, { Component } from "react";
import { Col } from "antd";

import PanelContainer from "./PanelContainer";
import ResultContainer from "./ResultContainer";

const modelOptions = [
	{ value: "id-1", text: "FACE RECOGNITION - A Type", country: "jp" },
	{ value: "id-2", text: "FACE RECOGNITION - B Type", country: "jp" },
	{ value: "id-3", text: "FACE RECOGNITION - C Type", country: "jp" },
	{ value: "id-4", text: "FACE RECOGNITION - D Type", country: "jp" },
	{ value: "id-5", text: "FACE RECOGNITION - E Type", country: "tw" },
	{ value: "id-6", text: "FACE RECOGNITION - F Type", country: "tw" },
	{ value: "id-7", text: "FACE RECOGNITION - G Type", country: "tw" },
	{ value: "id-8", text: "FACE RECOGNITION - H Type", country: "tw" }
];

const datasetOptions = [
	{ value: "id-1", text: "THAI FACE DATASET - 10.0GB", country: "jp" },
	{ value: "id-2", text: "JAPANESE FACE DATASET - 28.0GB", country: "jp" },
	{ value: "id-3", text: "KOREAN FACE DATASET - 20.0GB", country: "jp" },
	{ value: "id-4", text: "HAWAII FACE DATASET - 1.2TB", country: "jp" },
	{ value: "id-5", text: "MONKEY FACE DATASET - 22.6GB", country: "tw" },
	{ value: "id-6", text: "DOG FACE DATASET - 1.4GB", country: "tw" },
	{ value: "id-7", text: "CAT FACE DATASET - 98.2GB", country: "tw" },
	{ value: "id-8", text: "ELEPHANT FACE DATASET - 2.5TB", country: "tw" }
];
class Home extends Component {
	constructor() {
		super();
		this.state = {
			status: {
				location: "JAPAN <Location detected>",
				model: {
					id: null,
					text: null,
					country: null
				},
				dataset: {
					id: null,
					text: null,
					country: null
				},
				modelCountry: "jp",
				datasetCountry: "jp"
			},
			modelCountry: "jp",
			datasetCountry: "jp",
			model: null,
			dataset: null,
			loading: false,
			japanCodes: [],
			taiwanCodes: []
		};
	}
	//RadioButton Handler
	onModelCountryChange = event => {
		const modelCountry = event.target.value;
		this.setState({
			modelCountry,
			model: null
		});
	};

	onDatasetCountryChange = event => {
		const datasetCountry = event.target.value;
		this.setState({
			datasetCountry,
			dataset: null
		});
	};

	//Select (Dropdown) Handler
	onModelChange = model => {
		this.setState({ model });
	};
	onDatasetChange = dataset => {
		this.setState({ dataset });
	};

	//Render Handler
	getModelsByCountry = country => {
		return modelOptions.filter(({ country: _country }) => _country === country);
	};

	getDatasetByCountry = country => {
		return datasetOptions.filter(
			({ country: _country }) => _country === country
		);
	};

	//Button Handler
	onGenerateSubmit = async event => {
		await this.setState({ generateLoading: true });
		setTimeout(async () => {
			const model = modelOptions.find(
				_model =>
					_model.value === this.state.model &&
					_model.country === this.state.modelCountry
			);
			const dataset = modelOptions.find(
				_dataset =>
					_dataset.value === this.state.dataset &&
					_dataset.country === this.state.datasetCountry
			);

			await this.setState({
				status: {
					...this.state.status,
					model,
					dataset
				},
				generateLoading: false
			});

			this.generateCode();
		}, 1000);
	};

	generateCode = () => {
		//mock code
		const location = this.state.status.location;
		const currentLocation =
			location === "JAPAN <Location detected>" ? "jp" : "tw";

		const codesVariableName =
			currentLocation === "jp" ? "japanCodes" : "taiwanCodes";
		const anotherVariableName =
			currentLocation !== "jp" ? "japanCodes" : "taiwanCodes";

		let tmpCodes = [];

		//model
		const model = this.state.status.model;
		const modelCountry = model.country;

		if (modelCountry !== currentLocation)
			tmpCodes.push(
				`curl -o ./model.ckpt ${modelCountry}-host:model-${model.value}`
			);

		//dataset
		const dataset = this.state.status.dataset;
		const datasetCountry = dataset.country;

		if (datasetCountry !== currentLocation)
			tmpCodes.push(
				`curl -o ./dataset.tfrecord ${datasetCountry}-host:model-${
					dataset.value
				}`
			);

		tmpCodes.push(
			`docker run -v ./model.ckpt:/etc/models/compute-model.ckpt ./dataset/dataset.tfrecord:/etc/dataset/compute-dataset.tfrecord -d`
		);

		this.setState({
			[codesVariableName]: tmpCodes,
			[anotherVariableName]: []
		});
	};

	render() {
		const functions = {
			onModelCountryChange: this.onModelCountryChange,
			onDatasetCountryChange: this.onDatasetCountryChange,
			onModelChange: this.onModelChange,
			onDatasetChange: this.onDatasetChange,
			getModelsByCountry: this.getModelsByCountry,
			getDatasetByCountry: this.getDatasetByCountry,
			onGenerateSubmit: this.onGenerateSubmit
		};

		return (
			<div>
				<Col
					span={12}
					style={{ height: "100vh", borderRight: "1px solid #e8e8e8" }}
				>
					<PanelContainer {...this.state} {...functions} />
				</Col>
				<Col span={12} style={{ height: "100vh" }}>
					<ResultContainer
						{...this.state.status}
						japanCodes={this.state.japanCodes}
						taiwanCodes={this.state.taiwanCodes}
					/>
				</Col>
			</div>
		);
	}
}

export default Home;
