import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import MyTheme from "../../MyTheme";

const useStyles = makeStyles((theme) => ({
	button: {
		marginLeft: "20px",
		marginBottom: "10px",
		boxShadow: "1px 1px 8px #100f10",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	button_text: {
		fontSize: "20px",
	},
}));

function ButtonSecondary(props) {
	const classes = useStyles();
	return (
		<Button
			className={classes.button}
			style={MyTheme.palette.buttonSecondary}
			variant="outlined"
		>
			<Typography
				className={classes.button_text}
				style={MyTheme.typographyKarla}
			>
				{props.name}
			</Typography>
		</Button>
	);
}

export default ButtonSecondary;
