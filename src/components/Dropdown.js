import React from "react";

import { Select } from "antd";
const Option = Select.Option;

function handleChange(value) {
	console.log(`selected ${value}`);
}

function handleBlur() {
	console.log("blur");
}

function handleFocus() {
	console.log("focus");
}

export default ({
	placeholder,
	options,
	width = 200,
	optionFilterProp = "children"
}) => {
	return (
		<Select
			showSearch
			style={{ width }}
			placeholder={placeholder}
			optionFilterProp={optionFilterProp}
			onChange={handleChange}
			onFocus={handleFocus}
			onBlur={handleBlur}
			filterOption={(input, option) =>
				option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
		>
			{options.map(({ value, text }) => (
				<Option value={value}>{text}</Option>
			))}
		</Select>
	);
};
