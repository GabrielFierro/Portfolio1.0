/* Project.js */
import { useState } from "react";
import {
	Box,
	Button,
	Grid,
	makeStyles,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../MyTheme";
import Card from "../Card/Card";
import CardImage from "./CardImage/CardImage";

const images = [
	{
		category: "Todos",
	},
	{
		id: 1,
		category: "Diseño",
		url: "/static/images/projects/huddle-landing.avif",
		title: "Huddle landing",
		width: "30%",
		repository: "https://github.com/GabrielFierro/Huddle-landing-page",
		demo: "https://gabrielfierro.github.io/Huddle-landing-page/",
	},
	{
		id: 2,
		category: "Diseño",
		url: "/static/images/projects/profile-card.avif",
		title: "Profile card",
		width: "30%",
		repository: "https://github.com/GabrielFierro/ProfileCardComponent",
		demo: "https://gabrielfierro.github.io/ProfileCardComponent/",
	},
	{
		id: 3,
		category: "Diseño",
		url: "/static/images/projects/testimonial-grid.avif",
		title: "Testimonial grid",
		width: "30%",
		repository: "https://github.com/GabrielFierro/TestimonialsGridSection",
		demo: "https://gabrielfierro.github.io/TestimonialsGridSection/",
	},
	{
		category: "Diseño",
		url: "/static/images/projects/fylo-landing.avif",
		title: "Fylo Landing",
		width: "30%",
		repository: "https://github.com/GabrielFierro/Fylo-landing-page",
		demo: "https://gabrielfierro.github.io/Fylo-landing-page/",
	},
	{
		id: 4,
		category: "API",
		url: "/static/images/projects/github-profile-finder.avif",
		title: "GitHub Profile",
		width: "30%",
		repository: "https://github.com/GabrielFierro/GithubProfileFinder",
		demo: "https://github-profile-finder-gabrielfierro.vercel.app/",
	},
	{
		id: 5,
		category: "React",
		url: "/static/images/projects/react-pokeballs.avif",
		title: "Pokeballs",
		width: "30%",
		repository: "https://github.com/GabrielFierro/React-Pokeball",
		demo: "https://gabrielfierro.github.io/React-Pokeball/",
	},
];

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
	description_container: {
		height: "5%",
		left: "12%",
		position: "absolute",
		top: "30%",
		width: "75%",
	},
	projects_container: {
		height: "57%",
		left: "13%",
		position: "absolute",
		top: "35%",
		width: "70%",
	},
	section_container: {
		width: "100%",
		height: "100%",
		[theme.breakpoints.down("md")]: {
			margin: "0 100px 0 50px",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "0 0 0 -10px",
		},
		[theme.breakpoints.down("xs")]: {
			margin: "0 0 0 -38px",
		},
	},
	button_container: {
		width: "20%",
		height: "100%",
		marginLeft: "-5px",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
			width: "20%",
		},
	},
	button: {
		backgroundColor: "#1a1a19",
		color: "#f7f7fe",
		width: "60%",
		marginLeft: "25px",
		"&:hover": {
			backgroundColor: "#37b9f1",
		},
	},
	button_text: {
		fontSize: "1rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.75rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.5rem",
		},
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 300,
		width: "100%",
		marginLeft: "10px",
		marginTop: 5,
	},
	image: {
		position: "relative",
		height: 150,
		margin: "10px",
		[theme.breakpoints.down("xs")]: {
			width: "100% !important", // Overrides inline-style
			height: 100,
		},
		"&:hover, &$focusVisible": {
			zIndex: 1,
			"& $imageBackdrop": {
				opacity: 0.8,
			},
			"& $imageMarked": {
				opacity: 0.7,
			},
			"& $imageTitle": {
				border: "4px solid currentColor",
				cursor: "default",
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%",
	},
	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create("opacity"),
	},
	imageTitle: {
		position: "relative",
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
			theme.spacing(1) + 6
		}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: "absolute",
		bottom: -3,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity"),
	},
	iconContainer: {
		display: "flex",
		height: 30,
		justifyContent: "space-evenly",
		width: 160,
	},
	icon: {
		width: 30,
		height: 30,
		"&:hover": {
			stroke: "#37b9f1",
		},
	},
	buttonB: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 300,
		width: "100%",
	},
}));

function Project() {
	const classes = useStyles();
	const [category, setCategory] = useState("");
	const [display, setDisplay] = useState(true);
	const mapped = images.map((obj) => obj.category);
	const filteredImages = mapped.filter(
		(type, index) => mapped.indexOf(type) === index
	);

	// Use diferent states for each button on the categories

	const [defaultBackground, setDefaultBackground] = useState("#37b9f1");
	const [designBackground, setDesignBackground] = useState("#1a1a19");
	const [apiBackground, setApiBackground] = useState("#1a1a19");
	const [reactBackground, setReactBackground] = useState("#1a1a19");

	const handleButtonCategory = (category) => {
		switch (category) {
			case "Diseño":
				setDefaultBackground("#1a1a19");
				setDesignBackground("#37b9f1");
				setApiBackground("#1a1a19");
				setReactBackground("#1a1a19");
				break;
			case "API":
				setDefaultBackground("#1a1a19");
				setDesignBackground("#1a1a19");
				setApiBackground("#37b9f1");
				setReactBackground("#1a1a19");
				break;
			case "React":
				setDefaultBackground("#1a1a19");
				setDesignBackground("#1a1919");
				setApiBackground("#1a1a19");
				setReactBackground("#37b9f1");
				break;
			default:
				setDefaultBackground("#37b9f1");
				setDesignBackground("#1a1a19");
				setApiBackground("#1a1a19");
				setReactBackground("#1a1a19");
				break;
		}
	};

	return (
		<ThemeProvider theme={MyTheme}>
			<Card />
			<Box className={classes.title}>
				<Typography
					className={classes.skills_text}
					style={MyTheme.typographyRubik}
				>
					Proyectos
				</Typography>
			</Box>
			<Box className={classes.description_container}>
				<Grid container xs sm item direction="row">
					<Grid
						alignItems="center"
						className={classes.section_container}
						container
						direction="row"
						justify="center"
					>
						<ThemeProvider theme={MyTheme}>
							{filteredImages.map((category) => (
								<Grid
									container
									direction="row"
									className={classes.button_container}
									key={category}
								>
									{category === "Todos" ? (
										<Button
											className={classes.button}
											onClick={() => {
												setCategory(category);
												setDisplay(false);
												handleButtonCategory(category);
											}}
											size="small"
											style={{ backgroundColor: `${defaultBackground}` }}
											variant="contained"
										>
											<Typography
												className={classes.button_text}
												style={MyTheme.typographyKarla}
											>
												{category}
											</Typography>
										</Button>
									) : null}
									{category === "Diseño" ? (
										<Button
											className={classes.button}
											onClick={() => {
												setCategory(category);
												setDisplay(false);
												handleButtonCategory(category);
											}}
											size="small"
											style={{ backgroundColor: `${designBackground}` }}
											variant="contained"
										>
											<Typography
												className={classes.button_text}
												style={MyTheme.typographyKarla}
											>
												{category}
											</Typography>
										</Button>
									) : null}
									{category === "API" ? (
										<Button
											className={classes.button}
											onClick={() => {
												setCategory(category);
												setDisplay(false);
												handleButtonCategory(category);
											}}
											size="small"
											style={{ backgroundColor: `${apiBackground}` }}
											variant="contained"
										>
											<Typography
												className={classes.button_text}
												style={MyTheme.typographyKarla}
											>
												{category}
											</Typography>
										</Button>
									) : null}
									{category === "React" ? (
										<Button
											className={classes.button}
											onClick={() => {
												setCategory(category);
												setDisplay(false);
												handleButtonCategory(category);
											}}
											size="small"
											style={{ backgroundColor: `${reactBackground}` }}
											variant="contained"
										>
											<Typography
												className={classes.button_text}
												style={MyTheme.typographyKarla}
											>
												{category}
											</Typography>
										</Button>
									) : null}
								</Grid>
							))}
						</ThemeProvider>
					</Grid>
				</Grid>
			</Box>
			{images.map((image, index) => (
				<Box className={classes.projects_container} key={index}>
					<div className={classes.root}>
						{display || category === "Todos" ? (
							<div className={classes.buttonB}>
								<CardImage
									width="100%"
									url="/static/images/projects/huddle-landing.avif"
									title="Huddle landing"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/profile-card.avif"
									title="Profile"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/testimonial-grid.avif"
									title="Testimonial grid"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/fylo-landing.avif"
									title="Fylo landing"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/github-profile-finder.avif"
									title="GitHub Profile"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/react-pokeballs.avif"
									title="Pokeballs"
								/>
							</div>
						) : null}
						{category === "Diseño" && (
							<div className={classes.buttonB}>
								<CardImage
									width="100%"
									url="/static/images/projects/huddle-landing.avif"
									title="Huddle landing"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/profile-card.avif"
									title="Profile"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/testimonial-grid.avif"
									title="Testimonial grid"
								/>
								<CardImage
									width="100%"
									url="/static/images/projects/fylo-landing.avif"
									title="Fylo landing"
								/>
							</div>
						)}
						{category === "API" && (
							<div className={classes.buttonB}>
								<CardImage
									width="100%"
									url="/static/images/projects/github-profile-finder.avif"
									title="GitHub Profile"
								/>
							</div>
						)}
						{category === "React" && (
							<div className={classes.buttonB}>
								<CardImage
									width="100%"
									url="/static/images/projects/react-pokeballs.avif"
									title="Pokeballs"
								/>
							</div>
						)}
					</div>
				</Box>
			))}
		</ThemeProvider>
	);
}

export default Project;
