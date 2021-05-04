import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import MyTheme from "../../../MyTheme";

const images = [
	{
		url: "/static/images/projects/huddle-landing.jpg",
		title: "Huddle landing",
		width: "30%",
	},
	{
		url: "/static/images/projects/profile-card.jpg",
		title: "Profile card",
		width: "30%",
	},
	{
		url: "/static/images/projects/testimonial-grid.jpg",
		title: "Testimonial grid",
		width: "30%",
	},
	{
		url: "/static/images/projects/fylo-landing.jpg",
		title: "Fylo Landing",
		width: "30%",
	},
	{
		url: "/static/images/projects/github-profile-finder.png",
		title: "GitHub Profile Finder",
		width: "30%",
	},
	{
		url: "/static/images/projects/react-pokeballs.png",
		title: "Pokeballs",
		width: "30%",
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
				opacity: 0.15,
			},
			"& $imageMarked": {
				opacity: 0,
			},
			"& $imageTitle": {
				border: "4px solid currentColor",
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
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity"),
	},
}));

export default function ButtonBases() {
	const classes = useStyles();

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
							variant="h6"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyKarla}
						>
							{image.title}
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
			))}
		</div>
	);
}
