/* Card.js */
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	sectionCard: {
		background: theme.palette.primary.main,
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

	return <div className={classes.sectionCard}></div>;
}

export default Card;
