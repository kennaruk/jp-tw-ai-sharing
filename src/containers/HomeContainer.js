import React, { Component } from "react";
import { Col } from "antd";

import PanelContainer from "./PanelContainer";
import ResultContainer from "./ResultContainer";

import { getFormattedTaiwanJSONDATA } from "../utils/dataParser";

const modelOptions = [
	{ value: "id-1", text: "IMAGE RECOGNITION - A Type", country: "jp" },
	{ value: "id-2", text: "IMAGE RECOGNITION - B Type", country: "jp" },
	{ value: "id-3", text: "IMAGE RECOGNITION - C Type", country: "jp" },
	{ value: "id-4", text: "IMAGE RECOGNITION - D Type", country: "jp" },
	{ value: "id-5", text: "IMAGE RECOGNITION - E Type", country: "tw" },
	{ value: "id-6", text: "IMAGE RECOGNITION - F Type", country: "tw" },
	{ value: "id-7", text: "IMAGE RECOGNITION - G Type", country: "tw" },
	{ value: "id-8", text: "IMAGE RECOGNITION - H Type", country: "tw" }
];

let datasetOptions = [
	{ value: "id-1", text: "THAI FACE DATASET - 10.0GB", country: "jp" },
	{ value: "id-2", text: "JAPANESE FACE DATASET - 28.0GB", country: "jp" },
	{ value: "id-3", text: "KOREAN FACE DATASET - 20.0GB", country: "jp" },
	{ value: "id-4", text: "HAWAII FACE DATASET - 1.2TB", country: "jp" },
	// { value: "id-5", text: "MONKEY FACE DATASET - 22.6GB", country: "tw" },
	// { value: "id-6", text: "DOG FACE DATASET - 1.4GB", country: "tw" },
	// { value: "id-7", text: "CAT FACE DATASET - 98.2GB", country: "tw" },
	// { value: "id-8", text: "ELEPHANT FACE DATASET - 2.5TB", country: "tw" },
	{ value: "id-9", text: "JAPANESE FRUIT DATASET - 28.0GB", country: "jp" },
	{ value: "id-10", text: "KOREAN FRUIT DATASET - 20.0GB", country: "jp" },
	{ value: "id-11", text: "HAWAII FRUIT DATASET - 1.2TB", country: "jp" }
	// { value: "id-12", text: "S9 FRUIT DATASET - 22.6GB", country: "tw" },
	// { value: "id-13", text: "D2 FRUIT DATASET - 1.4GB", country: "tw" },
	// { value: "id-14", text: "C5 FRUIT DATASET - 98.2GB", country: "tw" },
	// { value: "id-15", text: "E8 FRUIT DATASET - 2.5TB", country: "tw" }
];
class Home extends Component {
	constructor() {
		super();

		this.state = {
			status: {
				location: "JAPAN <Location auto detected>",
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
			taiwanCodes: [],
			datasetOptions: [
				{ value: "id-1", text: "THAI FACE DATASET - 10.0GB", country: "jp" },
				{
					value: "id-2",
					text: "JAPANESE FACE DATASET - 28.0GB",
					country: "jp"
				},
				{ value: "id-3", text: "KOREAN FACE DATASET - 20.0GB", country: "jp" },
				{ value: "id-4", text: "HAWAII FACE DATASET - 1.2TB", country: "jp" },
				// { value: "id-5", text: "MONKEY FACE DATASET - 22.6GB", country: "tw" },
				// { value: "id-6", text: "DOG FACE DATASET - 1.4GB", country: "tw" },
				// { value: "id-7", text: "CAT FACE DATASET - 98.2GB", country: "tw" },
				// { value: "id-8", text: "ELEPHANT FACE DATASET - 2.5TB", country: "tw" },
				{
					value: "id-9",
					text: "JAPANESE FRUIT DATASET - 28.0GB",
					country: "jp"
				},
				{
					value: "id-10",
					text: "KOREAN FRUIT DATASET - 20.0GB",
					country: "jp"
				},
				{ value: "id-11", text: "HAWAII FRUIT DATASET - 1.2TB", country: "jp" }
				// { value: "id-12", text: "S9 FRUIT DATASET - 22.6GB", country: "tw" },
				// { value: "id-13", text: "D2 FRUIT DATASET - 1.4GB", country: "tw" },
				// { value: "id-14", text: "C5 FRUIT DATASET - 98.2GB", country: "tw" },
				// { value: "id-15", text: "E8 FRUIT DATASET - 2.5TB", country: "tw" }
			]
		};
	}

	async componentWillMount() {
		const { datasetOptions } = this.state;
		const datasetFromTaiwanAPI = await getFormattedTaiwanJSONDATA();
		console.log("datasetFromTaiwanAPI:", datasetFromTaiwanAPI);
		this.setState(
			{
				datasetOptions: datasetOptions.concat(datasetFromTaiwanAPI)
			},
			() => {
				this.forceUpdate();
			}
		);
		console.log("datasetOptions:", datasetOptions);
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

	getDatasetByCountry = (country, metadataSearch) => {
		const { datasetOptions } = this.state;

		return datasetOptions.filter(
			data =>
				data.country === country &&
				data.text.toLowerCase().includes(metadataSearch.toLowerCase())
		);
	};

	//Button Handler
	onGenerateSubmit = async event => {
		const { datasetOptions } = this.state;

		await this.setState({ generateLoading: true });
		setTimeout(async () => {
			const model = modelOptions.find(
				_model =>
					_model.value === this.state.model &&
					_model.country === this.state.modelCountry
			);
			const dataset = datasetOptions.find(
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
		console.log("this.state.status.location", this.state.status.location);
		const currentLocation =
			location === "JAPAN <Location auto detected>" ? "jp" : "tw";

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
				`curl -o ./model ${modelCountry}-host:model-${model.value}`
			);

		//dataset
		const dataset = this.state.status.dataset;
		const datasetCountry = dataset.country;

		if (datasetCountry !== currentLocation)
			tmpCodes.push(
				`curl -o ./dataset.tfrecord ${datasetCountry}-host:dataset-${
					dataset.value
				}`
			);

		tmpCodes.push(
			`docker run -v ./model:/etc/models/compute-model ./dataset/dataset.tfrecord:/etc/dataset/compute-dataset.tfrecord -d`
		);

		this.setState({
			[codesVariableName]: tmpCodes,
			[anotherVariableName]: []
		});
	};

	onLocationChangeHandler = event => {
		this.setState({
			status: {
				location:
					this.state.status.location === "JAPAN <Location auto detected>"
						? "TAIWAN <Location auto detected>"
						: "JAPAN <Location auto detected>",
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
				modelCountry: null,
				datasetCountry: null
			},
			japanCodes: [],
			taiwanCodes: []
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
						onLocationChangeHandler={this.onLocationChangeHandler}
					/>
				</Col>
			</div>
		);
	}
}

export default Home;
