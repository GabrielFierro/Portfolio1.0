/* import the images background for large and extra small devices */
import BackgroundLight from "../../assets/images/background/city-light-desktop.jpg";
import BackgroundDark from "../../assets/images/background/city-dark-desktop.jpg";
import BackgroundLightMobile from "../../assets/images/background/city-light-mobile.jpg";
import BackgroundDarkMobile from "../../assets/images/background/city-dark-mobile.jpg";
/* import from MateriaulUI */
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		objectFit: "cover",
		width: "100%",
	},
	background: {
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		height: "100vh",
		objectFit: "cover",
		position: "relative",
		width: "100%",
		zIndex: "-1",
		[theme.breakpoints.down("xs")]: {
			height: "100%",
		},
	},
}));

function Background(props) {
	const darkMode = props.darkMode;
	const isMobile = props.isMobile;
	const classes = useStyles();

	return (
		<article>
			{/* if the isMobile value is true, display the background image for mobile devices */}
			{/* else if the isMobile value is false, display the background image for large devices */}
			{isMobile ? (
				<section className={classes.container}>
					{/* if the darkMode value is true, display the background image of night */}
					{/* else if the darkMode value is false, display the background image of day */}
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
				</section>
			) : (
				<section className={classes.container}>
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
				</section>
			)}
		</article>
	);
}

export default Background;
