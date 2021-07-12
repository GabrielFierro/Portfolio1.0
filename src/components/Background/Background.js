/* import from MateriaulUI */
import { makeStyles } from "@material-ui/core";
/* Background.js */
import BackgroundLight from "../../assets/images/background/city-light-desktop.jpg";
import BackgroundDark from "../../assets/images/background/city-dark-desktop.jpg";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		objectFit: "contain",
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
	const classes = useStyles();

	return (
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
	);
}

export default Background;
