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
		[theme.breakpoints.down("xs")]: {
			left: "15%",
			width: "70%",
		},
	},
	title: {
		color: "rgba(16, 15, 16, 1)",
		margin: "0 1.5rem 0 1.5rem",
		fontSize: "3.75rem",
		letterSpacing: "-0.00833em",
		lineHeight: "1.2",
		position: "relative",
		top: "30%",
		[theme.breakpoints.down("md")]: {
			fontSize: "3.2rem",
			top: "25%",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.6rem",
			top: "20%",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.8rem",
			top: "30%",
		},
	},
	subtitle: {
		color: "#100f10",
		fontSize: "3.75rem",
		letterSpacing: "-0.00833em",
		lineHeight: "1.2",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.6rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.8rem",
		},
	},
}));

function Presentation() {
	const classes = useStyles();
	return (
		<article>
			<ThemeProvider theme={MyTheme}>
				<Grid item xs direction="column" className={classes.card}>
					<Typography className={classes.title} style={MyTheme.typographyRubik}>
						Hola, me llamo Gabriel Fierro.
						<Typography
							className={classes.subtitle}
							style={MyTheme.typographyRubik}
						>
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
