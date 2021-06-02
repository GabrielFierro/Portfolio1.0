import React from "react";
import Box from "@material-ui/core/Box";
import HtmlLogo from "../../../assets/images/icons/html-logo.svg";
import CssLogo from "../../../assets/images/icons/css-logo.svg";
import TailwindLogo from "../../../assets/images/icons/tailwind-logo.svg";
import BootstrapLogo from "../../../assets/images/icons/bootstrap-logo.svg";
import PythonLogo from "../../../assets/images/icons/python-logo.svg";
import FlaskLogo from "../../../assets/images/icons/flask-logo.svg";
import JavascriptLogo from "../../../assets/images/icons/javascript-logo.svg";
import GitLogo from "../../../assets/images/icons/git-icon.svg";
import Logo from "../Logo/Logo";

function LogoContainer() {
	return (
		<Box
			display="flex"
			direction="row"
			justifyContent="center"
			alignItems="center"
			style={{ width: "100%" }}
		>
			<Logo alt="Html logo" src={HtmlLogo}></Logo>
			<Logo alt="Css logo" src={CssLogo}></Logo>
			<Logo alt="Tailwind logo" src={TailwindLogo}></Logo>
			<Logo alt="Bootstrap logo" src={BootstrapLogo}></Logo>
			<Logo alt="Python logo" src={PythonLogo}></Logo>
			<Logo alt="Flask logo" src={FlaskLogo}></Logo>
			<Logo alt="Javascript logo" src={JavascriptLogo}></Logo>
			<Logo alt="Git logo" src={GitLogo}></Logo>
		</Box>
	);
}

export default LogoContainer;
