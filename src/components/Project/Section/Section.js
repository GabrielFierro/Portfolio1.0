import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	section_text: {
		fontSize: "16px",
		color: "#f7f7fe",
	},
	box: {
		backgroundColor: "#100f10",
		borderRadius: "5px",
		width: "100px",
		height: "20px",
		padding: "4px",
	},
}));

function Section({ children }) {
	const classes = useStyles();
	return (
		<Grid display="flex" justifyContent="center">
			<Box className={classes.box} display="flex" justifyContent="center" m={2}>
				{children}
			</Box>
		</Grid>
	);
}

export default Section;
