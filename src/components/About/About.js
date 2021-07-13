/* About.js */
import {
	CardMedia,
	Grid,
	makeStyles,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../MyTheme";
import Card from "../Card/Card";
import LogoContainer from "./LogoContainer/LogoContainer";
import ProfilePicture from "../../assets/images/profile/gabifierro.jpg";
import { ReactComponent as Location } from "../../assets/images/icons/location.svg";
import { ReactComponent as Book } from "../../assets/images/icons/book.svg";

const useStyles = makeStyles((theme) => ({
	section_container: {
		left: "10%",
		paddingLeft: "5%",
		position: "absolute",
		top: "20%",
		width: "80%",
		height: "35%",
	},
	media: {
		borderRadius: "8px",
		boxShadow: "3px 3px 15px #100f10",
		marginTop: "-10px",
		marginLeft: "-15px",
		height: "215px",
		width: "200px",
		[theme.breakpoints.down("md")]: {
			width: "145px",
			height: "150px",
			marginLeft: "-10px",
			marginTop: "-50px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "115px",
			height: "120px",
			marginTop: "-90px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "-10px",
			width: "85px",
			height: "85px",
		},
		[theme.breakpoints.down(400)]: {
			width: "75px",
			height: "75px",
		},
	},
	description_container: {
		width: "100%",
		height: "100%",
	},
	text_container: {
		margin: "0 20px 0 10px",
		position: "relative",
		width: "100%",
		height: "80%",
		[theme.breakpoints.down(1020)]: {
			margin: "-10px 20px 30px 0",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "-15px 35px 30px 15px",
		},
		[theme.breakpoints.down(850)]: {
			margin: "-15px 20px 30px 10px",
		},
		[theme.breakpoints.down(810)]: {
			margin: "-15px 10px 30px 5px",
		},
		[theme.breakpoints.down(670)]: {
			margin: "-15px 5px 55px 5px",
		},
		[theme.breakpoints.down(630)]: {
			margin: "-20px 0 75px 0",
		},
		[theme.breakpoints.down("xs")]: {
			margin: "0 0 10px -5px",
		},
		[theme.breakpoints.down(400)]: {
			margin: "0 0 10px -5px",
		},
	},
	my_description: {
		width: "95%",
		marginLeft: "10px",
		fontSize: "1.25rem",
		lineHeight: "1.6",
		[theme.breakpoints.down("md")]: {
			marginTop: "10px",
			fontSize: "1.15rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.05rem",
			marginRight: "15px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.9rem",
			marginTop: "10px",
			marginLeft: "0px",
		},
		[theme.breakpoints.down(470)]: {
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down(400)]: {
			fontSize: "0.8rem",
		},
		[theme.breakpoints.down(350)]: {
			fontSize: "0.75rem",
		},
	},
	my_descriptionLight: {
		color: MyTheme.palette.primary.main,
	},
	my_descriptionDark: {
		color: MyTheme.palette.primary.dark,
	},
	properties_container: {
		marginLeft: "50px",
		marginTop: "-15px",
		position: "relative",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			marginTop: "20px",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "15px 0 0 20px",
		},
		[theme.breakpoints.down(850)]: {
			margin: "5px 0 0 20px",
		},
		[theme.breakpoints.down(800)]: {
			margin: "30px 0 0 20px",
		},
		[theme.breakpoints.down(720)]: {
			margin: "55px 0 0 20px",
		},
		[theme.breakpoints.down("xs")]: {
			margin: "20px 0 -10px 0",
		},
		[theme.breakpoints.down(400)]: {
			margin: "50px 0 -10px 0",
		},
	},
	property_text: {
		marginLeft: "10px",
		fontSize: "1rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.75rem",
			marginTop: "5px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.7rem",
		},
	},
	property_text_light: {
		color: MyTheme.palette.primary.main,
	},
	property_text_dark: {
		color: MyTheme.palette.primary.dark,
	},
	skills_container: {
		left: "15%",
		position: "absolute",
		top: "55%",
		width: "70%",
		height: "35%",
		marginTop: "25px",
		fontSize: "2.25rem",
		[theme.breakpoints.down(800)]: {
			marginTop: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "40px",
		},
		[theme.breakpoints.down(400)]: {
			marginTop: "40px",
		},
	},
	skills_text_light: {
		color: MyTheme.palette.primary.main,
	},
	skills_text_dark: {
		color: MyTheme.palette.primary.dark,
	},
	skills_text: {
		fontSize: "3rem",
		marginTop: "20px",
		marginBottom: "15px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.25rem",
			marginTop: "45px",
		},
		[theme.breakpoints.down(700)]: {
			fontSize: "1.75rem",
			marginTop: "75px",
			marginBottom: "10px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.25rem",
			marginTop: "100px",
		},
	},
}));

function About(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<ThemeProvider theme={MyTheme}>
			<Card darkMode={darkMode} />
			{darkMode ? (
				<Grid>
					<Grid
						className={classes.section_container}
						container
						display="flex"
						justify="center"
						alignItems="center"
					>
						<Grid>
							<CardMedia
								title="Profile picture about me"
								className={classes.media}
								image={ProfilePicture}
							/>
						</Grid>
						<Grid
							className={classes.description_container}
							item
							sm
							container
							direction="row"
						>
							<Grid className={classes.text_container}>
								<Typography
									className={`${classes.my_description} ${classes.my_descriptionLight}`}
									style={MyTheme.typographyKarla}
								>
									Hola me llamo Gabriel Fierro y me apasiona el desarrollo web
									front-end. Me gusta leer, ver videos, buscar recursos para
									aprender cosas nuevas todos los días, a su vez, quería
									contarles que más adelante quiero aprender NodeJS para mostrar
									contenido de forma dinámica en mis proyectos. Para el
									desarrollo de mi Portfolio aprendí React y MaterialUI.
								</Typography>
							</Grid>
							<Grid className={classes.properties_container} container>
								<Grid container direction="row" item xs sm="auto" md={3}>
									<Location />
									<Typography
										className={`${classes.property_text} ${classes.property_text_light}`}
										style={MyTheme.typographyKarla}
									>
										Argentina
									</Typography>
								</Grid>
								<Grid container direction="row" item xs={12} sm="auto" md={9}>
									<Book />
									<Typography
										className={`${classes.property_text} ${classes.property_text_light}`}
										style={MyTheme.typographyKarla}
									>
										Lic. en Ciencias de la Computación
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						container
						item
						xs
						direction="column"
						className={classes.skills_container}
					>
						<Grid
							container
							direction="column"
							display="flex"
							alignItems="center"
							justifycontent="center"
						>
							<Typography
								className={`${classes.skills_text} ${classes.skills_text_light}`}
								style={MyTheme.typographyRubik}
							>
								Habilidades
							</Typography>
						</Grid>
						<Grid container direction="row">
							<LogoContainer darkMode={darkMode} />
						</Grid>
					</Grid>
				</Grid>
			) : (
				<Grid>
					<Grid
						className={classes.section_container}
						container
						display="flex"
						justify="center"
						alignItems="center"
					>
						<Grid>
							<CardMedia
								title="Profile picture about me"
								className={classes.media}
								image={ProfilePicture}
							/>
						</Grid>
						<Grid
							className={classes.description_container}
							item
							sm
							container
							direction="row"
						>
							<Grid
								container
								item
								xs
								sm={12}
								className={classes.text_container}
							>
								<Typography
									className={`${classes.my_description} ${classes.my_descriptionDark}`}
									style={MyTheme.typographyKarla}
								>
									Hola me llamo Gabriel Fierro y me apasiona el desarrollo web
									front-end. Me gusta leer, ver videos, buscar recursos para
									aprender cosas nuevas todos los días, a su vez, quería
									contarles que más adelante quiero aprender NodeJS para mostrar
									contenido de forma dinámica en mis proyectos. Para el
									desarrollo de mi Portfolio aprendí React y MaterialUI.
								</Typography>
							</Grid>
							<Grid className={classes.properties_container} container>
								<Grid container direction="row" item xs sm="auto" md={3}>
									<Location />
									<Typography
										className={`${classes.property_text} ${classes.property_text_dark}`}
										style={MyTheme.typographyKarla}
									>
										Argentina
									</Typography>
								</Grid>
								<Grid container direction="row" item xs={12} sm="auto" md={9}>
									<Book />
									<Typography
										className={`${classes.property_text} ${classes.property_text_dark}`}
										style={MyTheme.typographyKarla}
									>
										Lic. en Ciencias de la Computación
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						container
						item
						xs
						direction="column"
						className={classes.skills_container}
					>
						<Grid
							container
							direction="column"
							display="flex"
							alignItems="center"
							justifycontent="center"
						>
							<Typography
								className={`${classes.skills_text} ${classes.skills_text_dark}`}
								style={MyTheme.typographyRubik}
							>
								Habilidades
							</Typography>
						</Grid>
						<Grid container direction="row">
							<LogoContainer />
						</Grid>
					</Grid>
				</Grid>
			)}
		</ThemeProvider>
	);
}

export default About;
