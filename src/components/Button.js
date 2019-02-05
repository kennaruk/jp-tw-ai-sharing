import React from "react";

import { Button } from "antd";

export default ({
	type = "primary",
	size = null,
	loading = false,
	text = "default",
	onClick = null
}) => {
	return (
		<Button type={type} size={size} loading={loading} onClick={onClick}>
			{text}
		</Button>
	);
};
