import React from "react";

import { Radio } from "antd";

/*
	[{
		value: "a",
		text: "xxx"
	},{
		value: "aa",
		text: "xxx"
	}]
*/
export default ({ options, ...props }) => {
	return (
		<Radio.Group defaultValue={options[0].value} buttonStyle="solid" {...props}>
			{options.map(({ value, text }) => (
				<Radio.Button value={value} key={value}>
					{text}
				</Radio.Button>
			))}
		</Radio.Group>
	);
};
