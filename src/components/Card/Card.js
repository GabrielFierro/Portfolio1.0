/* Card.js */
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import MyTheme from "../../MyTheme";

const useStyles = makeStyles((theme) => ({
	sectionCardLight: {
		backgroundColor: MyTheme.palette.primary.main,
		borderRadius: "7px",
		height: "75%",
		left: "12%",
		opacity: "0.9",
		position: "absolute",
		top: "17%",
		width: "75%",
	},
	sectionCardDark: {
		backgroundColor: MyTheme.palette.primary.dark,
		borderRadius: "7px",
		height: "75%",
		left: "12%",
		opacity: "0.9",
		position: "absolute",
		top: "17%",
		width: "75%",
	},
}));

function Card(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<Grid>
			{darkMode ? (
				<Grid className={classes.sectionCardDark} />
			) : (
				<Grid className={classes.sectionCardLight} />
			)}
		</Grid>
	);
}

export default Card;
