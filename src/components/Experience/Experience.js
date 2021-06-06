/* Experience.js */
import {
	Box,
	Button,
	Grid,
	makeStyles,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import Card from "../Card/Card";
import MyTheme from "../../MyTheme";
import Magenta from "../../assets/images/magenta/magenta.png";
import MagentaMobile from "../../assets/images/magenta/magenta_mobile.avif";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const useStyles = makeStyles((theme) => ({
	title: {
		position: "relative",
		width: "100%",
	},
	skills_text: {
		alignItems: "center",
		display: "flex",
		fontSize: "3rem",
		justifyContent: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "2.65rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.35rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
		},
	},
	project_name: {
		alignItems: "center",
		display: "flex",
		fontSize: "1.75rem",
		justifyContent: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.25rem",
			marginLeft: "10px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			marginLeft: "0px",
		},
	},
	project_name_description: {
		alignItems: "center",
		display: "flex",
		fontSize: "1rem",
		justifyContent: "center",
		width: "100%",
	},
	description_text: {
		fontSize: "1.25rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.75rem",
		},
	},
	description_container: {
		height: "70%",
		left: "15%",
		position: "absolute",
		top: "20%",
		width: "70%",
	},
	left_container: {
		height: "50%",
		left: "15%",
		position: "absolute",
		top: "35%",
		width: "35%",
		[theme.breakpoints.down("xs")]: {
			top: "30%",
		},
	},
	right_container: {
		height: "50%",
		left: "52%",
		position: "absolute",
		top: "30%",
		width: "35%",
	},
	footer_container: {
		height: "12%",
		left: "15%",
		position: "absolute",
		top: "82%",
		width: "70%",
	},
	project_image: {
		width: "90%",
		margin: "10px 0 0 5px",
	},
	image: {
		width: "100%",
		margin: "5px 0 10px 0",
		borderRadius: "5px",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "-10px",
		},
	},
	button: {
		width: "80%",
		margin: "5px 0 5px 0",
		[theme.breakpoints.down("xs")]: {
			margin: "5px 0 5px -20px",
		},
	},
	button_container: {
		width: "100%",
		height: "50%",
	},
	button_image: {
		width: "40%",
		margin: "5px",
	},
	informative_button: {
		width: "100%",
		boxShadow: "1px 1px 8px #100f10",
	},
	button_primary: {
		width: "90%",
		boxShadow: "1px 1px 8px #100f10",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	button_secondary: {
		width: "90%",
		boxShadow: "1px 1px 8px #100f10",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	button_text: {
		fontSize: "1.25rem",
		color: "#f7f7fe",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.75rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.6rem",
		},
	},
	button_text_primary: {
		color: "#f7f7fe",
		fontSize: "1.25rem",
		paddingTop: "3px",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.75rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.5rem",
			paddingTop: "0px",
		},
	},
	button_text_secondary: {
		fontSize: "1.25rem",
		color: "#100f10",
		[theme.breakpoints.down("md")]: {
			fontSize: "0.75rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.5rem",
		},
	},
	primary_button: {
		marginLeft: "15px",
		width: "110px",
	},
	primary_button_text: {
		color: "#f7f7fe",
		fontSize: "24px",
	},
	icon: {
		marginLeft: "15px",
	},
	icon_size: {
		height: "40px",
		width: "40px",
	},
	develop_text: {
		fontSize: "1.25rem",
		marginTop: "5px",
	},
	grid_container: {
		zIndex: "1",
		height: "500px",
		position: "relative",
		width: "500px",
	},
}));

function Experience() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={MyTheme}>
			<Card />
			<Grid spacing={3}>
				<Grid item xs={12} className={classes.description_container}>
					<Box className={classes.title}>
						<Typography
							className={classes.skills_text}
							gutterbottom
							style={MyTheme.typographyRubik}
						>
							Experiencia
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Grid className={classes.left_container}>
						<Typography
							className={classes.project_name}
							style={MyTheme.typographyRubik}
						>
							Code in magenta
						</Typography>
						<Grid container direction="row">
							<Grid
								direction="column"
								className={classes.project_name_description}
							>
								<Grid className={classes.button}>
									<Button
										className={classes.informative_button}
										style={MyTheme.palette.buttonPrimary}
									>
										<Typography className={classes.button_text}>
											Octubre 2020 - Noviembre 2020
										</Typography>
									</Button>
								</Grid>
								<Typography
									className={classes.description_text}
									style={MyTheme.typographyKarla}
								>
									Creación de una landing page fictiosa, cuyo objetivo es
									compartir cursos, eventos y recursos para programadores que
									inician, así como para aquellos más experimentados.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6} className={classes.right_container}>
					<Grid container>
						<Grid className={classes.project_image}>
							<picture>
								<source media="(min-width:500px)" srcset={Magenta}></source>
								<source
									media="(min-width:200px)"
									srcset={MagentaMobile}
								></source>
								<img
									alt="magenta project"
									className={classes.image}
									src={Magenta}
								></img>
							</picture>
						</Grid>
						<Grid
							className={classes.button_container}
							container
							direction="row"
							xs={12}
						>
							<Grid className={classes.button_image} item xs={6} sm={5}>
								<Button
									className={classes.button_primary}
									href={"https://magentateam.github.io/landingOng/public/"}
									target="_blank"
									rel="noopener noreferrer"
									style={MyTheme.palette.buttonPrimary}
								>
									<Typography className={classes.button_text_primary}>
										Demo
									</Typography>
								</Button>
							</Grid>
							<Grid className={classes.button_image} item xs={6} sm={5}>
								<Button
									className={classes.button_secondary}
									href={"https://github.com/magentateam/landingOng"}
									target="_blank"
									rel="noopener noreferrer"
									style={MyTheme.palette.buttonSecondary}
								>
									<Typography className={classes.button_text_secondary}>
										Repositorio
									</Typography>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default Experience;
