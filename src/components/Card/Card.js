/* Card.js */
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import MyTheme from "../../MyTheme";

const useStyles = makeStyles((theme) => ({
	sectionCard: {
		backgroundColor: MyTheme.palette.primary.main,
		borderRadius: "7px",
		height: "75%",
		left: "12%",
		opacity: "0.9",
		position: "absolute",
		top: "17%",
		width: "75%",
	},
}));

function Card() {
	const classes = useStyles();

	return <Grid className={classes.sectionCard}></Grid>;
}

export default Card;
