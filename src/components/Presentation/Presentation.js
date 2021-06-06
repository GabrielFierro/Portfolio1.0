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
		margin: "0 1.5rem 0 1.5rem",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		position: "relative",
		top: "30%",
		[theme.breakpoints.down("md")]: {
			fontSize: "3.2rem",
			top: "25%",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
			top: "20%",
			margin: "0 0.5rem 0 0.5rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			margin: "1rem 1.25rem 0 1rem",
		},
	},
	subtitle: {
		color: "#100f10",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		display: "block",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			margin: "1rem 1.25rem 0 0",
		},
	},
	spanColor: {
		color: "#37b9f1",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
		},
	},
}));

function Presentation() {
	const classes = useStyles();
	return (
		<article>
			<ThemeProvider theme={MyTheme}>
				<Grid container item xs direction="column" className={classes.card}>
					<Typography
						variant="h2"
						className={classes.title}
						style={MyTheme.typographyRubik}
					>
						Hola, me llamo Gabriel Fierro.
						<Typography
							component="span"
							variant="h2"
							className={classes.subtitle}
							style={MyTheme.typographyRubik}
						>
							Soy un desarrollador
							<Typography
								variant="h2"
								component="span"
								className={classes.spanColor}
								style={MyTheme.typographyRubik}
							>
								{" "}
								front-end{" "}
							</Typography>
							creativo.
						</Typography>
					</Typography>
				</Grid>
			</ThemeProvider>
		</article>
	);
}

export default Presentation;
