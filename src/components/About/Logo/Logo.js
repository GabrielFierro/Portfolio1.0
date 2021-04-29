import React from "react";
import Box from "@material-ui/core/Box";

function Logo(props) {
	return (
		<Box alignItems="flex-start" display="flex" p={1}>
			<Box>
				<img alt={props.alt} src={props.src}></img>
			</Box>
		</Box>
	);
}

export default Logo;
