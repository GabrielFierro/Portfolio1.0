import React from "react";
import { Box, makeStyles } from "@material-ui/core/";
/* Imports the logos */
import TailwindLogo from "../../../assets/images/icons/tailwind-logo.svg";
import BootstrapLogo from "../../../assets/images/icons/bootstrap-logo.svg";
import PythonLogo from "../../../assets/images/icons/python-logo.svg";
import ReactLogo from "../../../assets/images/icons/react-icon.svg";
import JavascriptLogo from "../../../assets/images/icons/javascript-logo.svg";
import GitLogo from "../../../assets/images/icons/git-icon.svg";
/* Import the Logo component with the HTML and CSS components */
import Logo from "../Logo/Logo";
import HtmlLogo from "../Logo/HTML";
import CSSLogo from "../Logo/CSS";

const useStyles = makeStyles((theme) => ({
	box: {
		width: "100%",
	},
}));

function LogoContainer(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<Box
			className={classes.box}
			display="flex"
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			<HtmlLogo darkMode={darkMode} />
			<CSSLogo darkMode={darkMode} />
			<Logo alt="Tailwind logo" src={TailwindLogo}></Logo>
			<Logo alt="Bootstrap logo" src={BootstrapLogo}></Logo>
			<Logo alt="Python logo" src={PythonLogo}></Logo>
			<Logo alt="Javascript logo" src={JavascriptLogo}></Logo>
			<Logo alt="React logo" src={ReactLogo}></Logo>
			<Logo alt="Git logo" src={GitLogo}></Logo>
		</Box>
	);
}

export default LogoContainer;
