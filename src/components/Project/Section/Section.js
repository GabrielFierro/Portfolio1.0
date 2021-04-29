import React from "react";
import {
	Box,
	Grid,
	makeStyles,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../../MyTheme";

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

function Section(props) {
	const classes = useStyles();
	return (
		<ThemeProvider theme={MyTheme}>
			<Grid display="flex" justifyContent="center">
				<Box
					className={classes.box}
					display="flex"
					justifyContent="center"
					m={2}
				>
					<Typography
						className={classes.section_text}
						style={MyTheme.typographyRubik}
					>
						{props.name}
					</Typography>
				</Box>
			</Grid>
		</ThemeProvider>
	);
}

export default Section;
