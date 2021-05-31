import React from "react";
import {
	ButtonBase,
	Grid,
	Link,
	makeStyles,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../../MyTheme";
import { ReactComponent as LinkIcon } from "../../../assets/images/icons/link.svg";
import { ReactComponent as WorldWideWeb } from "../../../assets/images/icons/worldwideweb.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 300,
		width: "30%",
		marginLeft: "10px",
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

function ButtonContainer(props) {
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
						variant="h5"
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
								<LinkIcon className={classes.icon} />
							</Link>
						</Grid>
					</Typography>
				</span>
			</ButtonBase>
		</div>
	);
}

export default ButtonContainer;
