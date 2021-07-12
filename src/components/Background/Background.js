/* import from MateriaulUI */
import { makeStyles } from "@material-ui/core";
/* Background.js */
import BackgroundLight from "../../assets/images/background/city-light-desktop.jpg";
import BackgroundDark from "../../assets/images/background/city-dark-desktop.jpg";
import BackgroundLightMobile from "../../assets/images/background/city-light-mobile.jpg";
import BackgroundDarkMobile from "../../assets/images/background/city-dark-mobile.jpg";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		objectFit: "cover",
		width: "100%",
	},
	background: {
		height: "100vh",
		objectFit: "cover",
		position: "relative",
		width: "100%",
		zIndex: "-1",
	},
}));

function Background(props) {
	const darkMode = props.darkMode;
	const isMobile = props.isMobile;
	const classes = useStyles();

	return (
		<div>
			{isMobile ? (
				<div className={classes.container}>
					{darkMode ? (
						<img
							alt="City background"
							className={classes.background}
							src={BackgroundDarkMobile}
						/>
					) : (
						<img
							alt="City background"
							className={classes.background}
							src={BackgroundLightMobile}
						/>
					)}
				</div>
			) : (
				<div className={classes.container}>
					{darkMode ? (
						<img
							alt="City background"
							className={classes.background}
							src={BackgroundDark}
						/>
					) : (
						<img
							alt="City background"
							className={classes.background}
							src={BackgroundLight}
						/>
					)}
				</div>
			)}
		</div>
	);
}

export default Background;
