import React from "react";

import { Select } from "antd";
const Option = Select.Option;

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
	optionFilterProp = "children",
	...props
}) => {
	return (
		<Select
			showSearch
			style={{ width }}
			placeholder={placeholder}
			optionFilterProp={optionFilterProp}
			onFocus={handleFocus}
			onBlur={handleBlur}
			{...props}
			filterOption={(input, option) =>
				option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
			}
		>
			{options.map(({ value, text }) => (
				<Option value={value} key={value}>
					{text}
				</Option>
			))}
		</Select>
	);
};
