import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import HtmlLogo from "../../../assets/images/icons/html-logo.svg";
import CssLogo from "../../../assets/images/icons/css-logo.svg";
import TailwindLogo from "../../../assets/images/icons/tailwind-logo.svg";
import BootstrapLogo from "../../../assets/images/icons/bootstrap-logo.svg";
import PythonLogo from "../../../assets/images/icons/python-logo.svg";
import FlaskLogo from "../../../assets/images/icons/flask-logo.svg";
import JavascriptLogo from "../../../assets/images/icons/javascript-logo.svg";
import GitLogo from "../../../assets/images/icons/git-icon.svg";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: "15px 0 0 15px",
	},
}));

function Logo() {
	const classes = useStyles();
	return (
		<Box
			alignItems="flex-start"
			display="flex"
			p={1}
			style={{ marginLeft: "90px" }}
		>
			<Box style={{ marginTop: "5px" }}>
				<img alt="html logo" src={HtmlLogo}></img>
			</Box>
			<Box style={{ marginTop: "5px" }}>
				<img alt="css logo" src={CssLogo}></img>
			</Box>
			<Box style={{ marginTop: "20px" }}>
				<img alt="tailwind logo" src={TailwindLogo}></img>
			</Box>
			<Box className={classes.margin}>
				<img alt="bootstrap logo" src={BootstrapLogo}></img>
			</Box>
			<Box className={classes.margin}>
				<img alt="python logo" src={PythonLogo}></img>
			</Box>
			<Box className={classes.margin}>
				<img alt="flask logo" src={FlaskLogo}></img>
			</Box>
			<Box className={classes.margin}>
				<img alt="javascript logo" src={JavascriptLogo}></img>
			</Box>
			<Box className={classes.margin}>
				<img alt="git logo" src={GitLogo}></img>
			</Box>
		</Box>
	);
}

export default Logo;
