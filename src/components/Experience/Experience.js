/* Experience.js */
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	Box,
	Grid,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import Card from "../Card/Card";
import MyTheme from "../../MyTheme";
import Timeline from "../../assets/images/timeline/timeline.svg";
import Magenta from "../../assets/images/magenta/magenta.png";

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
		height: "15%",
		left: "15%",
		position: "absolute",
		top: "75%",
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
		height: "40px",
		marginLeft: "75px",
		width: "110px",
		boxShadow: "1px 1px 8px #100f10",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	secondary_button: {
		height: "40px",
		marginLeft: "25px",
		boxShadow: "1px 1px 8px #100f10",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
	},
	primary_button_text: {
		color: "#f7f7fe",
		fontSize: "24px",
	},
	secondary_button_text: {
		color: "#100f10",
		fontSize: "24px",
	},
	timeline: {
		width: "5%",
		marginTop: "15px",
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
						<Grid direction="row">
							<Button
								className={classes.primary_button}
								style={MyTheme.palette.buttonSend}
								variant="contained"
							>
								<Typography
									className={classes.primary_button_text}
									style={MyTheme.typographyKarla}
								>
									Demo
								</Typography>
							</Button>
							<Button
								className={classes.secondary_button}
								style={MyTheme.palette.buttonCancel}
							>
								<Typography
									className={classes.secondary_button_text}
									style={MyTheme.typographyKarla}
								>
									Repositorio
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Box className={classes.footer_container}></Box>
			</Container>
		</ThemeProvider>
	);
}

export default Experience;
