/* Experience.js */
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	Box,
	Grid,
	Link,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import Card from "../Card/Card";
import MyTheme from "../../MyTheme";
import Timeline from "../../assets/images/timeline/timeline.svg";
import Magenta from "../../assets/images/magenta/magenta.png";
import HtmlLogo from "../../assets/images/icons/html-logo.svg";
import CssLogo from "../../assets/images/icons/css-logo.svg";
import TailwindLogo from "../../assets/images/icons/tailwind-logo.svg";
import JavascriptLogo from "../../assets/images/icons/javascript-logo.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const useStyles = makeStyles((theme) => ({
	title: {
		left: "12%",
		position: "absolute",
		top: "20%",
		width: "75%",
	},
	skills_text: {
		alignItems: "	",
		display: "flex",
		fontSize: "3rem",
		justifyContent: "center",
	},
	project_name: {
		alignItems: "center",
		display: "flex",
		fontSize: "1.75rem",
		justifyContent: "center",
		marginTop: "-10px",
	},
	project_name_description: {
		alignItems: "center",
		display: "flex",
		fontSize: "1rem",
		justifyContent: "center",
		width: "95%",
		marginLeft: "-10px",
	},
	description_text: {
		fontSize: "1.25rem",
		margin: "0 30px 0 60px",
	},
	description_container: {
		height: "45%",
		left: "15%",
		position: "absolute",
		top: "30%",
		width: "70%",
	},
	left_container: {
		height: "100%",
		paddingTop: "20px",
		position: "absolute",
		width: "50%",
	},
	right_container: {
		height: "100%",
		left: "50%",
		position: "absolute",
		width: "50%",
	},
	footer_container: {
		height: "12%",
		left: "15%",
		position: "absolute",
		top: "82%",
		width: "70%",
	},
	project_image: {
		width: "100%",
		margin: "10px 0 0 35px",
	},
	image: {
		width: "380px",
		margin: "5px 0 10px 0",
		borderRadius: "5px",
		boxShadow: "1px 1px 8px #100f10",
	},
	button: {
		margin: "0 0 30px 0",
		boxShadow: "1px 1px 8px #100f10",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
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
	timeline: {
		width: "5%",
		marginTop: "15px",
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
}));

function Experience() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={MyTheme}>
			<Card />
			<Container maxWidth="sm">
				<Box className={classes.title}>
					<Typography
						className={classes.skills_text}
						gutterbottom
						style={MyTheme.typographyRubik}
					>
						Experiencia
					</Typography>
				</Box>
				<Box className={classes.description_container}>
					<Grid className={classes.left_container}>
						<Typography
							className={classes.project_name}
							style={MyTheme.typographyRubik}
						>
							Code in magenta
						</Typography>
						<Grid container xs={2} sm direction="row">
							<Grid direction="row" className={classes.timeline}>
								<Box>
									<img alt="timeline with circles" src={Timeline}></img>
								</Box>
							</Grid>
							<Grid
								direction="column"
								className={classes.project_name_description}
							>
								<Button
									className={classes.button}
									variant="contained"
									style={MyTheme.palette.buttonSend}
								>
									<div style={{ color: "white", fontSize: "12px" }}>
										Octubre 2020 - Noviembre 2020
									</div>
								</Button>
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
					<Grid className={classes.right_container}>
						<Box className={classes.project_image}>
							<img
								alt="magenta project"
								className={classes.image}
								src={Magenta}
							></img>
						</Box>
						<Box alignItems="flex-start" display="flex" p={1}>
							<Grid className={classes.primary_button}>
								<ButtonPrimary name="Demo"></ButtonPrimary>
							</Grid>
							<Grid className={classes.secondary_button}>
								<ButtonSecondary name="Repositorio" />
							</Grid>
						</Box>
					</Grid>
				</Box>
				<Grid direction="row" className={classes.footer_container}>
					<Box alignItems="flex-start" display="flex" p={1}>
						<Typography
							className={classes.develop_text}
							style={MyTheme.typographyRubik}
						>
							Desarrollado con:
						</Typography>
						<Box className={classes.icon}>
							<img
								alt="html logo"
								className={classes.icon_size}
								src={HtmlLogo}
							></img>
						</Box>
						<Box className={classes.icon}>
							<img
								alt="css logo"
								className={classes.icon_size}
								src={CssLogo}
							></img>
						</Box>
						<Box className={classes.icon}>
							<img
								alt="tailwind logo"
								className={classes.icon_size}
								src={TailwindLogo}
							></img>
						</Box>
						<Box className={classes.icon}>
							<img
								alt="javascript logo"
								className={classes.icon_size}
								src={JavascriptLogo}
							></img>
						</Box>
					</Box>
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default Experience;
