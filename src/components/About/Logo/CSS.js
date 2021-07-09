import React from "react";
import { Grid } from "@material-ui/core";
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
		},
		[theme.breakpoints.down("xs")]: {
			height: "30px",
			width: "30px",
		},
		[theme.breakpoints.between("425", "500")]: {
			height: "25px",
			width: "25px",
		},
		[theme.breakpoints.between("320", "375")]: {
			height: "20px",
			width: "20px",
			marginTop: "5px",
		},
	},
}));

function CSS(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<Grid container xs="auto" item display="flex">
			{darkMode ? (
				<svg
					className={classes.icon}
					width="90"
					height="90"
					viewBox="0 0 86 85"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M59.5818 3.88874H54.6783L59.7777 9.42237V12.0567H49.2749V8.97214H54.3735L49.2749 3.43851V0.801514H59.5818V3.88874ZM47.1924 3.88874H42.2889L47.3883 9.42237V12.0567H36.8848V8.97214H41.9841L36.8848 3.43851V0.801514H47.1924V3.88874ZM34.9245 4.01491H29.6332V8.84331H34.9245V12.0567H25.872V0.801514H34.9245V4.01491Z"
						fill="#f7f7fe"
					/>
					<path
						d="M18.6616 77.5001L13.2847 17.1946H72.3643L66.9827 77.4901L42.7883 84.1985L18.6616 77.5001V77.5001Z"
						fill="#1572B6"
					/>
					<path
						d="M42.8255 79.0713L62.3748 73.6512L66.9741 22.1259H42.8255V79.0713Z"
						fill="#33A9DC"
					/>
					<path
						d="M42.8248 43.9742H52.6118L53.2885 36.4006H42.8248V29.0043H61.3714L61.1941 30.9885L59.3766 51.3699H42.8248V43.9742V43.9742Z"
						fill="white"
					/>
					<path
						d="M42.8693 63.1829L42.8368 63.1922L34.5997 60.9676L34.0725 55.0687H26.6489L27.6855 66.6819L42.8354 70.8874L42.87 70.8774V63.1829H42.8693Z"
						fill="#EBEBEB"
					/>
					<path
						d="M51.9836 51.0571L51.0924 60.9623L42.8434 63.1889V70.884L58.006 66.6819L58.1175 65.4321L59.4045 51.0571H51.9836V51.0571Z"
						fill="white"
					/>
					<path
						d="M42.8507 29.0043V36.3999H24.9855L24.8367 34.7378L24.5 30.9885L24.3227 29.0043H42.8507ZM42.8248 43.9749V51.3712H34.6921L34.544 49.7091L34.2066 45.9591L34.0293 43.9749H42.8248V43.9749Z"
						fill="#EBEBEB"
					/>
				</svg>
			) : (
				<svg
					className={classes.icon}
					width="86"
					height="85"
					viewBox="0 0 86 85"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M59.5818 3.88874H54.6783L59.7777 9.42237V12.0567H49.2749V8.97214H54.3735L49.2749 3.43851V0.801514H59.5818V3.88874ZM47.1924 3.88874H42.2889L47.3883 9.42237V12.0567H36.8848V8.97214H41.9841L36.8848 3.43851V0.801514H47.1924V3.88874ZM34.9245 4.01491H29.6332V8.84331H34.9245V12.0567H25.872V0.801514H34.9245V4.01491Z"
						fill="#100f10"
					/>
					<path
						d="M18.6616 77.5001L13.2847 17.1946H72.3643L66.9827 77.4901L42.7883 84.1985L18.6616 77.5001V77.5001Z"
						fill="#1572B6"
					/>
					<path
						d="M42.8255 79.0713L62.3748 73.6512L66.9741 22.1259H42.8255V79.0713Z"
						fill="#33A9DC"
					/>
					<path
						d="M42.8248 43.9742H52.6118L53.2885 36.4006H42.8248V29.0043H61.3714L61.1941 30.9885L59.3766 51.3699H42.8248V43.9742V43.9742Z"
						fill="white"
					/>
					<path
						d="M42.8693 63.1829L42.8368 63.1922L34.5997 60.9676L34.0725 55.0687H26.6489L27.6855 66.6819L42.8354 70.8874L42.87 70.8774V63.1829H42.8693Z"
						fill="#EBEBEB"
					/>
					<path
						d="M51.9836 51.0571L51.0924 60.9623L42.8434 63.1889V70.884L58.006 66.6819L58.1175 65.4321L59.4045 51.0571H51.9836V51.0571Z"
						fill="white"
					/>
					<path
						d="M42.8507 29.0043V36.3999H24.9855L24.8367 34.7378L24.5 30.9885L24.3227 29.0043H42.8507ZM42.8248 43.9749V51.3712H34.6921L34.544 49.7091L34.2066 45.9591L34.0293 43.9749H42.8248V43.9749Z"
						fill="#EBEBEB"
					/>
				</svg>
			)}
		</Grid>
	);
}

export default CSS;
