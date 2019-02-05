import React from "react";

import { Button } from "antd";

export default ({
	type = "primary",
	size = null,
	loading = false,
	text = "default",
	onClick = null,
	...props
}) => {
	return (
		<Button
			type={type}
			size={size}
			loading={loading}
			onClick={onClick}
			{...props}
		>
			{text}
		</Button>
	);
};
