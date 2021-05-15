import React from "react";
import {
	Box,
	Button,
	makeStyles,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../../MyTheme";

const useStyles = makeStyles((theme) => ({
	section_container: {
		width: "60%",
	},
	button: {
		backgroundColor: "#1a1a19",
		color: "#f7f7fe",
		"&:hover": {
			backgroundColor: "#37b9f1",
		},
	},
}));

function SectionContainer(props) {
	const classes = useStyles();
	return (
		<Box
			className={classes.section_container}
			justifyContent="center"
			display="flex"
			style={{
				height: "25px",
				marginLeft: "160px",
				marginTop: "-10px",
			}}
			p={2}
		>
			<ThemeProvider theme={MyTheme}>
				<Box px={2} mt={-1}>
					<Button variant="contained" className={classes.button}>
						<Typography style={MyTheme.typographyKarla}>Todos</Typography>
					</Button>
				</Box>
				<Box px={2} mt={-1}>
					<Button variant="contained" className={classes.button}>
						<Typography style={MyTheme.typographyKarla}>Diseño</Typography>
					</Button>
				</Box>
				<Box px={2} mt={-1}>
					<Button variant="contained" className={classes.button}>
						<Typography style={MyTheme.typographyKarla}>React</Typography>
					</Button>
				</Box>
				<Box px={2} mt={-1}>
					<Button variant="contained" className={classes.button}>
						<Typography style={MyTheme.typographyKarla}>API</Typography>
					</Button>
				</Box>
			</ThemeProvider>
		</Box>
	);
}

export default SectionContainer;
