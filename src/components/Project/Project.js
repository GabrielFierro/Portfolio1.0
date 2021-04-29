/* Project.js */
import {
	Box,
	Grid,
	makeStyles,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../MyTheme";
import Card from "../Card/Card";
import SectionContainer from "./SectionContainer/SectionContainer";
import ProjectCard from "./ProjectCard/ProjectCard";

const useStyles = makeStyles((theme) => ({
	title: {
		left: "40%",
		position: "absolute",
		top: "18%",
		width: "20%",
	},
	skills_text: {
		alignItems: "center",
		display: "flex",
		fontSize: "3rem",
		justifyContent: "center",
	},
	description_container: {
		height: "5%",
		left: "15%",
		position: "absolute",
		top: "30%",
		width: "70%",
	},
	projects_container: {
		height: "57%",
		left: "15%",
		position: "absolute",
		top: "35%",
		width: "70%",
	},
}));

function Project() {
	const classes = useStyles();
	return (
		<ThemeProvider>
			<Card />
			<Box className={classes.title}>
				<Typography
					className={classes.skills_text}
					gutterbottom
					style={MyTheme.typographyRubik}
				>
					Proyectos
				</Typography>
			</Box>
			<Box className={classes.description_container}>
				<Grid container xs={3} sm direction="row">
					<SectionContainer />
				</Grid>
			</Box>
			<Box className={classes.projects_container}>
				<ProjectCard />
			</Box>
		</ThemeProvider>
	);
}

export default Project;
