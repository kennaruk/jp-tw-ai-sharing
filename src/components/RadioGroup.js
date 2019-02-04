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
export default ({ options }) => {
	return (
		<Radio.Group defaultValue={options[0].value} buttonStyle="solid">
			{options.map(({ value, text }) => (
				<Radio.Button value={value}>
					{
						//TODO: add icon
					}
					{text}
				</Radio.Button>
			))}
		</Radio.Group>
	);
};
