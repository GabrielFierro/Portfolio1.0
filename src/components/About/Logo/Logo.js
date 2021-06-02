import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	icon: {
		width: "90px",
		height: "90px",
		[theme.breakpoints.down("md")]: {
			height: "75px",
			width: "75px",
		},
		[theme.breakpoints.down("sm")]: {
			height: "45px",
			width: "45px",
			marginTop: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "30px",
			width: "30px",
			marginTop: "5px",
		},
	},
}));

function Logo(props) {
	const classes = useStyles();
	return (
		<Grid container xs="auto" display="flex">
			<img alt={props.alt} src={props.src} className={classes.icon}></img>
		</Grid>
	);
}

export default Logo;
