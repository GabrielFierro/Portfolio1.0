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

const useStyles = makeStyles((theme) => ({
	title: {
		left: "12%",
		position: "absolute",
		top: "20%",
		width: "75%",
	},
	skills_text: {
		alignItems: "center",
		display: "flex",
		fontSize: "3rem",
		justifyContent: "center",
	},
	project_name: {
		alignItems: "center",
		display: "flex",
		fontSize: "1.75rem",
		justifyContent: "center",
		marginTop: "15px",
	},
	project_name_description: {
		alignItems: "center",
		display: "flex",
		fontSize: "1rem",
		justifyContent: "center",
	},
	description_text: {
		fontSize: "1rem",
		margin: "0 50px 0 50px",
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
	button: {
		marginBottom: "15px",
		boxShadow: "2px 2px 5px #37b9f1",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
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
						<Grid direction="row">
							<Grid direction="row">
								<Typography>ASD</Typography>
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
					<Grid className={classes.right_container}></Grid>
				</Box>
				<Box className={classes.footer_container}></Box>
			</Container>
		</ThemeProvider>
	);
}

export default Experience;
