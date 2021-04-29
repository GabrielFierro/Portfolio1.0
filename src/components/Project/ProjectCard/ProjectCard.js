import React from "react";
import {
	CardActionArea,
	CardMedia,
	Grid,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core";
import MyTheme from "../../../MyTheme";
import HuddleLanding from "../../../assets/images/projects/huddle-landing.jpg";
import ProfileCard from "../../../assets/images/projects/profile-card.jpg";
import Testimonial from "../../../assets/images/projects/testimonial-grid.jpg";
import FyloLanding from "../../../assets/images/projects/fylo-landing.jpg";
import GitHubProfileFinder from "../../../assets/images/projects/github-profile-finder.png";
import Pokeballs from "../../../assets/images/projects/react-pokeballs.png";

const useStyles = makeStyles((theme) => ({
	media_container: {
		position: "relative",
		width: "250px",
		height: "150px",
		marginLeft: "35px",
		marginTop: "10px",
	},
	media: {
		borderRadius: "5px",
		height: "150px",
		width: "250px",
	},
	paper: {
		padding: 1,
	},
}));

function ProjectCard() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={MyTheme}>
			<Grid container item xs={12} spacing={3}>
				<Grid item xs={4}>
					<CardActionArea className={classes.media_container}>
						<CardMedia
							image={HuddleLanding}
							className={classes.media}
							title="Huddle landing page"
						/>
					</CardActionArea>
				</Grid>
				<Grid item xs={4}>
					<CardActionArea className={classes.media_container}>
						<CardMedia
							image={ProfileCard}
							className={classes.media}
							title="Profile card component"
						/>
					</CardActionArea>
				</Grid>
				<Grid item xs={4}>
					<CardActionArea className={classes.media_container}>
						<CardMedia
							image={Testimonial}
							className={classes.media}
							title="Testimonial Grid"
						/>
					</CardActionArea>
				</Grid>
				<Grid item xs={4}>
					<CardActionArea className={classes.media_container}>
						<CardMedia
							image={FyloLanding}
							className={classes.media}
							title="Fylo landing page"
						/>
					</CardActionArea>
				</Grid>
				<Grid item xs={4}>
					<CardActionArea className={classes.media_container}>
						<CardMedia
							image={GitHubProfileFinder}
							className={classes.media}
							title="GitHub profile finder"
						/>
					</CardActionArea>
				</Grid>
				<Grid item xs={4}>
					<CardActionArea className={classes.media_container}>
						<CardMedia
							image={Pokeballs}
							className={classes.media}
							title="Pokeballs builded with React"
						/>
					</CardActionArea>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default ProjectCard;
