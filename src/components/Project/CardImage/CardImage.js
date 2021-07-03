import React from "react";
import {
	ButtonBase,
	Grid,
	Link,
	makeStyles,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../../MyTheme";
import GitHubIcon from "./Screens/GitHubIcon/GitHubIcon";
import { ReactComponent as WorldWideWeb } from "../../../assets/images/icons/worldwideweb.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: "10px",
		minWidth: 300,
		width: "30%",
		[theme.breakpoints.down("md")]: {
			minWidth: 225,
			width: "25%",
		},
		[theme.breakpoints.down("sm")]: {
			minWidth: 140,
			width: "25%",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "-5px",
			minWidth: 120,
		},
	},
	image: {
		left: "5%",
		height: 150,
		margin: "10px 5px 5px 5px",
		position: "relative",
		[theme.breakpoints.down("md")]: {
			height: 135,
			left: "10%",
		},
		[theme.breakpoints.down("sm")]: {
			height: 120,
			left: "25%",
		},
		[theme.breakpoints.between("600", "660")]: {
			height: 120,
			left: "1%",
		},
		[theme.breakpoints.down("xs")]: {
			height: 80,
			width: "75% !important", // Overrides inline-style
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
		fontSize: "1.5rem",
		position: "relative",
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
			theme.spacing(1) + 6
		}px`,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.25rem",
			padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
				1
			)}px`,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "0.7rem",
		},
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
		[theme.breakpoints.down("sm")]: {
			width: 120,
		},
		[theme.breakpoints.down("xs")]: {
			width: 70,
		},
	},
	icon: {
		width: 40,
		height: 40,
		stroke: "#f7f7fe",
		color: "#f7f7fe",
		"&:hover": {
			stroke: "#37b9f1",
		},
	},
}));

function CardImage(props) {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();

	return (
		<div className={classes.root}>
			<ButtonBase
				focusRipple
				key={props.category}
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{
					width: props.width,
				}}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${props.url})`,
					}}
				/>
				<span className={classes.imageBackdrop} />
				<span className={classes.imageButton}>
					<Typography
						component="span"
						color="inherit"
						className={classes.imageTitle}
						style={MyTheme.typographyRubik}
					>
						{props.title}
						<span className={classes.imageMarked} />

						<Grid container className={classes.iconContainer}>
							<Link href={props.demo} onClick={preventDefault}>
								<WorldWideWeb className={classes.icon} />
							</Link>
							<Link href={props.repository} onClick={preventDefault}>
								<GitHubIcon className={classes.icon} />
							</Link>
						</Grid>
					</Typography>
				</span>
			</ButtonBase>
		</div>
	);
}

export default CardImage;
