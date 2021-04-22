import "./Presentation.css";
import MyTheme from "../../MyTheme";
import { ThemeProvider } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	card: {
		backgroundColor: "rgba(247, 247, 247, 0.9)",
		height: "100%",
		position: "absolute",
		width: "50%",
	},
	title: {
		color: "rgba(16, 15, 16, 1)",
		margin: "0 2rem 0 2rem",
		position: "relative",
		top: "30%",
	},
	subtitle: {
		color: "#100f10",
	},
}));

function Presentation() {
	const classes = useStyles();
	return (
		<article>
			<ThemeProvider theme={MyTheme}>
				<Grid item xs direction="column" className={classes.card}>
					<Typography
						className={classes.title}
						style={MyTheme.typographyRubik}
						variant="h2"
					>
						Hola, me llamo Gabriel Fierro.
						<Typography style={MyTheme.typographyRubik} variant="h2">
							Soy un desarrollador
							<span style={MyTheme.palette.accentColor}> front-end </span>
							creativo.
						</Typography>
					</Typography>
				</Grid>
			</ThemeProvider>
		</article>
	);
}

export default Presentation;
