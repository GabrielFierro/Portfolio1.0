/* Project.js */
import { useState } from "react";
import Slider from "react-slick";
import {
	Box,
	Button,
	Grid,
	makeStyles,
	ThemeProvider,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project.css";
import MyTheme from "../../MyTheme";
import Card from "../Card/Card";
import CardImage from "./CardImage/CardImage";

const images = [
	{
		category: "Todos",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/Huddle-landing-page/",
		repository: "https://github.com/GabrielFierro/Huddle-landing-page",
		title: "Huddle landing",
		url: "/static/images/projects/huddle-landing.avif",
		width: "30%",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/ProfileCardComponent/",
		repository: "https://github.com/GabrielFierro/ProfileCardComponent",
		title: "Profile card",
		url: "/static/images/projects/profile-card.avif",
		width: "30%",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/TestimonialsGridSection/",
		repository: "https://github.com/GabrielFierro/TestimonialsGridSection",
		title: "Testimonial grid",
		url: "/static/images/projects/testimonial-grid.avif",
		width: "30%",
	},
	{
		category: "Diseño",
		demo: "https://gabrielfierro.github.io/Fylo-landing-page/",
		repository: "https://github.com/GabrielFierro/Fylo-landing-page",
		title: "Fylo Landing",
		url: "/static/images/projects/fylo-landing.avif",
		width: "30%",
	},
	{
		category: "API",
		demo: "https://github-profile-finder-gabrielfierro.vercel.app/",
		repository: "https://github.com/GabrielFierro/GithubProfileFinder",
		title: "GitHub Profile",
		url: "/static/images/projects/github-profile-finder.avif",
		width: "30%",
	},
	{
		category: "React",
		demo: "https://gabrielfierro.github.io/React-Pokeball/",
		repository: "https://github.com/GabrielFierro/React-Pokeball",
		title: "Pokeballs",
		url: "/static/images/projects/react-pokeballs.avif",
		width: "30%",
	},
];

const useStyles = makeStyles((theme) => ({
	title: {
		left: "40%",
		position: "absolute",
		top: "18%",
		width: "20%",
	},
	skills_text_light: {
		color: MyTheme.palette.primary.main,
	},
	skills_text_dark: {
		color: MyTheme.palette.primary.dark,
	},
	skills_text: {
		color: MyTheme.palette.primary.main,
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
		left: "12%",
		position: "absolute",
		top: "35%",
		width: "75%",
	},
	section_container: {
		height: "100%",
		width: "100%",
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
		height: "100%",
		marginLeft: "-5px",
		width: "20%",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
			width: "20%",
		},
	},

	button: {
		color: "#f7f7fe",
		marginLeft: "25px",
		width: "60%",
		boxShadow: "5px 3px 10px #100f10",
		"&:hover": {
			backgroundColor: "#37b9f1",
		},
		[theme.breakpoints.down("xs")]: {
			boxShadow: "none",
		},
	},
	buttonLight: {
		backgroundColor: "#1a1a19",
	},
	buttonDark: {
		backgroundColor: "#3a3a3a",
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
		marginLeft: "10px",
		marginTop: 5,
		minWidth: 300,
		width: "100%",
		[theme.breakpoints.down("md")]: {
			marginLeft: "-10px",
		},
	},
	buttonB: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 300,
		width: "100%",
	},
	image: {
		border: "3px solid #100f10",
		borderRadius: "5px",
		width: "100%",
		height: "100%",
	},
	projectImage: {
		width: "100%",
		objectFit: "cover",
		marginTop: "15px",
		border: "3px solid #100f10",
	},
	projectImageExtraSmall: {
		margin: "15px 0 0 40px",
		width: "100%",
		objectFit: "cover",
	},
}));

function Project(props) {
	const classes = useStyles();
	const [category, setCategory] = useState("");
	const [display, setDisplay] = useState(true);
	const mapped = images.map((obj) => obj.category);
	const filteredCategories = mapped.filter(
		(type, index) => mapped.indexOf(type) === index
	);
	const filteredImages = images.filter((value) => value.category !== "Todos");

	const theme = useTheme();
	const isMobileSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const isMobileExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
	const darkMode = props.darkMode;

	// Use diferent states for each button on the categories

	const [defaultBackground, setDefaultBackground] = useState("#37b9f1");
	const [designBackground, setDesignBackground] = useState("#1a1a19");
	const [designBackgroundDark, setDesignBackgroundDark] = useState("#3a3a3a");
	const [apiBackground, setApiBackground] = useState("#1a1a19");
	const [apiBackgroundDark, setApiBackgroundDark] = useState("#3a3a3a");
	const [reactBackground, setReactBackground] = useState("#1a1a19");
	const [reactBackgroundDark, setReactBackgroundDark] = useState("#3a3a3a");

	const handleButtonCategoryLight = (category) => {
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

	const handleButtonCategoryDark = (category) => {
		switch (category) {
			case "Diseño":
				setDefaultBackground("#3a3a3a");
				setDesignBackgroundDark("#37b9f1");
				setApiBackgroundDark("#3a3a3a");
				setReactBackgroundDark("#3a3a3a");
				break;
			case "API":
				setDefaultBackground("#3a3a3a");
				setDesignBackgroundDark("#3a3a3a");
				setApiBackgroundDark("#37b9f1");
				setReactBackgroundDark("#3a3a3a");
				break;
			case "React":
				setDefaultBackground("#3a3a3a");
				setDesignBackgroundDark("#3a3a3a");
				setApiBackgroundDark("#3a3a3a");
				setReactBackgroundDark("#37b9f1");
				break;
			default:
				setDefaultBackground("#37b9f1");
				setDesignBackgroundDark("#3a3a3a");
				setApiBackgroundDark("#3a3a3a");
				setReactBackgroundDark("#3a3a3a");
				break;
		}
	};

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: "block",
					background: "#37b9f1",
				}}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "#37b9f1" }}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		className: "slides",
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		arrows: true,
		swipeToSlide: true,
		centerMode: true,
		dots: true,
		adaptiveHeight: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<ThemeProvider theme={MyTheme}>
			<Card darkMode={darkMode} />
			{/* Begin of the title component */}
			<Box className={classes.title}>
				{darkMode ? (
					<Typography
						className={`${classes.skills_text} ${classes.skills_text_light}`}
						style={MyTheme.typographyRubik}
					>
						Proyectos
					</Typography>
				) : (
					<Typography
						className={`${classes.skills_text} ${classes.skills_text_dark}`}
						style={MyTheme.typographyRubik}
					>
						Proyectos
					</Typography>
				)}
			</Box>
			{/* End of the title component*/}
			{/* Begin of the button component */}
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
							{/* From the filteredCategories array display the buttons
							for dark and light mode */}
							{filteredCategories.map((category) => (
								<Grid
									container
									direction="row"
									className={classes.button_container}
									key={category}
								>
									{category === "Todos" ? (
										<Grid container>
											{/* If the dark mode value is true, display the buttons with the styles for the dark mode */}
											{darkMode ? (
												<Button
													className={`${classes.button} ${classes.button_dark}`}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
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
											) : (
												<Button
													className={`${classes.button} ${classes.button_light}`}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
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
											)}
										</Grid>
									) : null}
									{category === "Diseño" ? (
										<Grid container>
											{darkMode ? (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
													}}
													size="small"
													style={{ backgroundColor: `${designBackgroundDark}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											) : (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
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
											)}
										</Grid>
									) : null}
									{category === "API" ? (
										<Grid container>
											{darkMode ? (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
													}}
													size="small"
													style={{ backgroundColor: `${apiBackgroundDark}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											) : (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
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
											)}
										</Grid>
									) : null}
									{category === "React" ? (
										<Grid container>
											{darkMode ? (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryDark(category);
													}}
													size="small"
													style={{ backgroundColor: `${reactBackgroundDark}` }}
													variant="contained"
												>
													<Typography
														className={classes.button_text}
														style={MyTheme.typographyKarla}
													>
														{category}
													</Typography>
												</Button>
											) : (
												<Button
													className={classes.button}
													onClick={() => {
														setCategory(category);
														setDisplay(false);
														handleButtonCategoryLight(category);
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
											)}
										</Grid>
									) : null}
								</Grid>
							))}
						</ThemeProvider>
					</Grid>
				</Grid>
			</Box>
			<Box className={classes.projects_container}>
				{isMobileSmall ? (
					<div className="App">
						{isMobileExtraSmall ? (
							<Slider {...settings} className={classes.projectImageExtraSmall}>
								<img
									className={classes.image}
									src="/static/images/projects/github-profile-finder.png"
									alt="GithubPF"
								/>
								<img
									className={classes.image}
									src="/static/images/projects/fylo-landing.jpg"
									alt="Fylo Landing"
								/>
								<img
									className={classes.image}
									src="/static/images/projects/huddle-landing.avif"
									alt="Huddle landing"
								/>
							</Slider>
						) : (
							<Slider {...settings}>
								{filteredImages.map((image, index) => {
									return (
										<img
											className={classes.projectImage}
											alt={image.title}
											src={image.url}
											key={index}
										/>
									);
								})}
							</Slider>
						)}
					</div>
				) : (
					<div className={classes.root}>
						{display || category === "Todos" ? (
							<div className={classes.buttonB}>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Huddle-landing-page/"
									repository="https://github.com/GabrielFierro/Huddle-landing-page"
									title="Huddle landing"
									url="/static/images/projects/huddle-landing.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/ProfileCardComponent/"
									repository="https://github.com/GabrielFierro/ProfileCardComponent"
									title="Profile card"
									url="/static/images/projects/profile-card.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/TestimonialsGridSection/"
									repository="https://github.com/GabrielFierro/TestimonialsGridSection"
									title="Testimonial grid"
									url="/static/images/projects/testimonial-grid.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Fylo-landing-page/"
									repository="https://github.com/GabrielFierro/Fylo-landing-page"
									title="Fylo landing"
									url="/static/images/projects/fylo-landing.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://github-profile-finder-gabrielfierro.vercel.app/"
									repository="https://github.com/GabrielFierro/GithubProfileFinder"
									title="GitHub Profile"
									url="/static/images/projects/github-profile-finder.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/React-Pokeball/"
									repository="https://github.com/GabrielFierro/React-Pokeball"
									title="Pokeballs"
									url="/static/images/projects/react-pokeballs.avif"
									width="100%"
								/>
							</div>
						) : null}
						{category === "Diseño" && (
							<div className={classes.buttonB}>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Huddle-landing-page/"
									repository="https://github.com/GabrielFierro/Huddle-landing-page"
									title="Huddle landing"
									url="/static/images/projects/huddle-landing.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/ProfileCardComponent/"
									repository="https://github.com/GabrielFierro/ProfileCardComponent"
									title="Profile"
									url="/static/images/projects/profile-card.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/TestimonialsGridSection/"
									repository="https://github.com/GabrielFierro/TestimonialsGridSection"
									title="Testimonial grid"
									url="/static/images/projects/testimonial-grid.avif"
									width="100%"
								/>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/Fylo-landing-page/"
									repository="https://github.com/GabrielFierro/Fylo-landing-page"
									title="Fylo landing"
									url="/static/images/projects/fylo-landing.avif"
									width="100%"
								/>
							</div>
						)}
						{category === "API" && (
							<div className={classes.buttonB}>
								<CardImage
									category={category}
									demo="https://github-profile-finder-gabrielfierro.vercel.app/"
									repository="https://github.com/GabrielFierro/GithubProfileFinder"
									title="GitHub Profile"
									url="/static/images/projects/github-profile-finder.avif"
									width="100%"
								/>
							</div>
						)}
						{category === "React" && (
							<div className={classes.buttonB}>
								<CardImage
									category={category}
									demo="https://gabrielfierro.github.io/React-Pokeball/"
									repository="https://github.com/GabrielFierro/React-Pokeball"
									title="Pokeballs"
									url="/static/images/projects/react-pokeballs.avif"
									width="100%"
								/>
							</div>
						)}
					</div>
				)}
			</Box>
		</ThemeProvider>
	);
}

export default Project;
