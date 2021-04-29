import React from "react";
import {
	ButtonBase,
	makeStyles,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../../MyTheme";
import HuddleLanding from "../../../assets/images/projects/huddle-landing.jpg";
import ProfileCard from "../../../assets/images/projects/profile-card.jpg";
import Testimonial from "../../../assets/images/projects/testimonial-grid.jpg";
import FyloLanding from "../../../assets/images/projects/fylo-landing.jpg";
import GitHubProfileFinder from "../../../assets/images/projects/github-profile-finder.png";
import Pokeballs from "../../../assets/images/projects/react-pokeballs.png";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		marginTop: "10px",
		marginLeft: "45px",
		minWidth: 300,
		width: "100%",
	},
	image: {
		position: "relative",
		height: 160,
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

function ProjectCard() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={MyTheme}>
			<div className={classes.root}>
				<ButtonBase
					focusRipple
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: "30%",
					}}
				>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${HuddleLanding})`,
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyRubik}
						>
							"Testimonial"
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
				<ButtonBase
					focusRipple
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: "30%",
					}}
				>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${ProfileCard})`,
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyRubik}
						>
							"ProfileCard"
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
				<ButtonBase
					focusRipple
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: "30%",
					}}
				>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${Testimonial})`,
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyRubik}
						>
							"Testimonial"
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
				<ButtonBase
					focusRipple
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: "30%",
					}}
				>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${FyloLanding})`,
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyRubik}
						>
							"Fylo Landing Page"
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
				<ButtonBase
					focusRipple
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: "30%",
					}}
				>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${GitHubProfileFinder})`,
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyRubik}
						>
							"GitHub Profile Finder"
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
				<ButtonBase
					focusRipple
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: "30%",
					}}
				>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${Pokeballs})`,
						}}
					/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							className={classes.imageTitle}
							style={MyTheme.typographyRubik}
						>
							"Pokeballs"
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
			</div>
		</ThemeProvider>
	);
}

export default ProjectCard;
