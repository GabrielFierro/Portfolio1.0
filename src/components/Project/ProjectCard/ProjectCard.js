import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MyTheme from "../../../MyTheme";
import { ReactComponent as LinkIcon } from "../../../assets/images/icons/link.svg";
import { ReactComponent as WorldWideWeb } from "../../../assets/images/icons/worldwideweb.svg";
import Link from "@material-ui/core/Link";

const images = [
	{
		url: "/static/images/projects/huddle-landing.jpg",
		title: "Huddle landing",
		width: "30%",
		repositorie: "https://github.com/GabrielFierro/Huddle-landing-page",
		demo: "https://gabrielfierro.github.io/Huddle-landing-page/",
	},
	{
		url: "/static/images/projects/profile-card.jpg",
		title: "Profile card",
		width: "30%",
		repositorie: "https://github.com/GabrielFierro/ProfileCardComponent",
		demo: "https://gabrielfierro.github.io/ProfileCardComponent/",
	},
	{
		url: "/static/images/projects/testimonial-grid.jpg",
		title: "Testimonial grid",
		width: "30%",
		repositorie: "https://github.com/GabrielFierro/TestimonialsGridSection",
		demo: "https://gabrielfierro.github.io/TestimonialsGridSection/",
	},
	{
		url: "/static/images/projects/fylo-landing.jpg",
		title: "Fylo Landing",
		width: "30%",
		repositorie: "https://github.com/GabrielFierro/Fylo-landing-page",
		demo: "https://gabrielfierro.github.io/Fylo-landing-page/",
	},
	{
		url: "/static/images/projects/github-profile-finder.png",
		title: "GitHub Profile",
		width: "30%",
		repositorie: "https://github.com/GabrielFierro/GithubProfileFinder",
		demo: "https://github-profile-finder-gabrielfierro.vercel.app/",
	},
	{
		url: "/static/images/projects/react-pokeballs.png",
		title: "Pokeballs",
		width: "30%",
		repositorie: "https://github.com/GabrielFierro/React-Pokeball",
		demo: "https://gabrielfierro.github.io/React-Pokeball/",
	},
];

const useStyles = makeStyles((theme) => ({
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
}));

export default function ButtonBases() {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	return (
		<div className={classes.root}>
			{images.map((image) => (
				<ButtonBase
					focusRipple
					key={image.title}
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: image.width,
					}}
				>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${image.url})`,
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="h5"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyKarla}
						>
							{image.title}
							<span className={classes.imageMarked} />

							<Grid container className={classes.iconContainer}>
								<Link href={image.demo} onClick={preventDefault}>
									<WorldWideWeb className={classes.icon} />
								</Link>
								<Link href={image.repositorie} onClick={preventDefault}>
									<LinkIcon className={classes.icon} />
								</Link>
							</Grid>
						</Typography>
					</span>
				</ButtonBase>
			))}
		</div>
	);
}
