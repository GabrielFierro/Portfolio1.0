import MyTheme from "../../MyTheme";
import { ThemeProvider } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	cardLight: {
		backgroundColor: MyTheme.palette.primary.main,
		height: "100%",
		position: "absolute",
		width: "50%",
		[theme.breakpoints.down("xs")]: {
			left: "15%",
			width: "70%",
		},
	},
	cardDark: {
		backgroundColor: MyTheme.palette.primary.dark,
		height: "100%",
		position: "absolute",
		width: "50%",
		left: "50%",
		[theme.breakpoints.down("xs")]: {
			left: "15%",
			width: "70%",
		},
	},
	titleLight: {
		color: "#100f10",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		margin: "-2rem 1.5rem 0 1.5rem",
		position: "relative",
		top: "30%",
		[theme.breakpoints.down("md")]: {
			fontSize: "3rem",
			top: "25%",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
			margin: "0 0.5rem 0 0.5rem",
			top: "20%",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			margin: "1rem 1.25rem 0 1rem",
		},
	},
	titleDark: {
		color: "#f7f7fe",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		margin: "-2rem 1.5rem 0 1.5rem",
		position: "relative",
		top: "30%",
		[theme.breakpoints.down("md")]: {
			fontSize: "3rem",
			top: "25%",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
			margin: "0 0.5rem 0 0.5rem",
			top: "20%",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			margin: "1rem 1.25rem 0 1rem",
		},
	},
	subtitleLight: {
		color: "#100f10",
		display: "block",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		[theme.breakpoints.down("md")]: {
			fontSize: "3rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			margin: "1rem 1.25rem 0 0",
		},
	},
	subtitleDark: {
		color: "#f7f7fe",
		display: "block",
		letterSpacing: "-0.00833em",
		lineHeight: "1.5",
		[theme.breakpoints.down("md")]: {
			fontSize: "3rem",
		},
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

function Presentation(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<article>
			<ThemeProvider theme={MyTheme}>
				{darkMode ? (
					<Grid
						container
						item
						xs
						direction="column"
						className={classes.cardDark}
					>
						<Typography
							variant="h2"
							className={classes.titleDark}
							style={MyTheme.typographyRubik}
						>
							Hola, me llamo Gabriel Fierro.
							<Typography
								component="span"
								variant="h2"
								className={classes.subtitleDark}
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
				) : (
					<Grid
						container
						item
						xs
						direction="column"
						className={classes.cardLight}
					>
						<Typography
							variant="h2"
							className={classes.titleLight}
							style={MyTheme.typographyRubik}
						>
							Hola, me llamo Gabriel Fierro.
							<Typography
								component="span"
								variant="h2"
								className={classes.subtitleLight}
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
				)}
			</ThemeProvider>
		</article>
	);
}

export default Presentation;
