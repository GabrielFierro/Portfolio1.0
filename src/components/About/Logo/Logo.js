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

function Logo() {
	return (
		<Box
			alignItems="flex-start"
			display="flex"
			p={1}
			style={{ marginLeft: "90px" }}
		>
			<Box style={{ marginRight: "5px" }}>
				<img alt="html logo" src={HtmlLogo}></img>
			</Box>
			<Box>
				<img alt="css logo" src={CssLogo}></img>
			</Box>
			<Box style={{ marginLeft: "5px", marginTop: "25px" }}>
				<img alt="tailwind logo" src={TailwindLogo}></img>
			</Box>
			<Box style={{ marginLeft: "15px", marginTop: "15px" }}>
				<img alt="bootstrap logo" src={BootstrapLogo}></img>
			</Box>
			<Box style={{ marginLeft: "10px", marginTop: "15px" }}>
				<img alt="python logo" src={PythonLogo}></img>
			</Box>
			<Box style={{ marginLeft: "10px", marginTop: "15px" }}>
				<img alt="flask logo" src={FlaskLogo}></img>
			</Box>
			<Box style={{ marginLeft: "10px", marginTop: "10px" }}>
				<img alt="javascript logo" src={JavascriptLogo}></img>
			</Box>
			<Box style={{ marginLeft: "10px", marginTop: "10px" }}>
				<img alt="git logo" src={GitLogo}></img>
			</Box>
		</Box>
	);
}

export default Logo;
