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
