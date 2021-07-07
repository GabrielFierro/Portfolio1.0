import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import MyTheme from "../../../../../MyTheme";

const useStyles = makeStyles((theme) => ({
	button_primary: {
		boxShadow: "1px 1px 8px #100f10",
		margin: "0 10px 0 15px",
		width: "34%",
		[theme.breakpoints.down(430)]: {
			width: "40%",
			margin: "0 5px 0 10px",
		},
		[theme.breakpoints.down(350)]: {
			width: "43%",
			margin: "0 5px 0 5px",
		},
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	button_primary_text: {
		fontSize: "0.9rem",
		color: "#f7f7fe",
		[theme.breakpoints.down(475)]: {
			fontSize: "0.85rem",
		},
	},
	button_image: {
		margin: "35px 0 0 50px",
		width: "95%",
		[theme.breakpoints.down(550)]: {
			margin: "40px 0 0 40px",
		},
		[theme.breakpoints.down(475)]: {
			margin: "40px 0 0 35px",
		},
		[theme.breakpoints.down(425)]: {
			margin: "40px 0 0 20px",
		},
		[theme.breakpoints.down(350)]: {
			margin: "40px 0 0 10px",
		},
	},
}));

function Buttons() {
	const classes = useStyles();
	return (
		<Grid
			container
			direction="row"
			className={classes.button_image}
			item
			xs={12}
			sm={6}
		>
			<Button
				className={classes.button_primary}
				href={"https://magentateam.github.io/landingOng/public/"}
				target="_blank"
				rel="noopener noreferrer"
				style={MyTheme.palette.buttonPrimary}
			>
				<Typography className={classes.button_primary_text}>Demo</Typography>
			</Button>
			<Button
				className={classes.button_primary}
				href={"https://magentateam.github.io/landingOng/public/"}
				target="_blank"
				rel="noopener noreferrer"
				style={MyTheme.palette.buttonPrimary}
			>
				<Typography className={classes.button_primary_text}>
					Repositorio
				</Typography>
			</Button>
		</Grid>
	);
}

export default Buttons;
