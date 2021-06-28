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
		left: "12%",
		paddingLeft: "5%",
		position: "absolute",
		top: "23%",
		width: "70%",
	},
	media: {
		borderRadius: "8px",
		boxShadow: "1px 1px 20px #100f10",
		marginRight: "5px",
		height: "180px",
		width: "190px",
		[theme.breakpoints.down("md")]: {
			width: "145px",
			height: "150px",
			marginLeft: "-10px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "90px",
			height: "95px",
			marginTop: "-90px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "-5px",
		},
	},
	text_container: {
		marginLeft: "10px",
		position: "relative",
		width: "100%",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "0px",
		},
	},
	my_description: {
		width: "100%",
		marginTop: "-55px",
		marginLeft: "10px",
		fontSize: "1.5rem",
		lineHeight: "1.2",
		[theme.breakpoints.down("md")]: {
			marginTop: "-5px",
			fontSize: "1.35rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.20rem",
			marginRight: "15px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.9rem",
			marginTop: "10px",
			marginLeft: "0px",
		},
	},
	my_descriptionLight: {
		color: MyTheme.palette.primary.main,
	},
	my_descriptionDark: {
		color: MyTheme.palette.primary.dark,
	},
	properties_container: {
		left: "5%",
		position: "relative",
		width: "100%",
		marginTop: "15px",
		[theme.breakpoints.down("md")]: {
			marginTop: "20px",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "25px",
			marginLeft: "-10px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "5px",
		},
	},

	property_text: {
		fontSize: "1.15rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.6rem",
			marginTop: "10px",
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
		marginTop: "5px",
		fontSize: "2.25rem",
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
			fontSize: "2.5rem",
			marginTop: "40px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.25rem",
			marginTop: "110px",
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
						<Grid item sm container direction="row">
							<Grid className={classes.text_container}>
								<Typography
									className={`${classes.my_description} ${classes.my_descriptionLight}`}
									style={MyTheme.typographyKarla}
								>
									Me apasiona el desarrollo front-end, por lo que me capacito
									para aprender sobre nuevas tecnologías, que me permitan crecer
									tanto a nivel personal, como profesional.
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
							<LogoContainer />
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
						<Grid item sm container direction="row">
							<Grid className={classes.text_container}>
								<Typography
									className={`${classes.my_description} ${classes.my_descriptionDark}`}
									style={MyTheme.typographyKarla}
								>
									Me apasiona el desarrollo front-end, por lo que me capacito
									para aprender sobre nuevas tecnologías, que me permitan crecer
									tanto a nivel personal, como profesional.
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
