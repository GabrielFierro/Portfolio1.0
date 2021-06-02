/* About.js */
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Box, makeStyles } from "@material-ui/core";
import Card from "../Card/Card";
import ProfilePicture from "../../assets/images/profile/gabifierro.jpg";
import MyTheme from "../../MyTheme";
import LogoContainer from "./LogoContainer/LogoContainer";
import { ReactComponent as Location } from "../../assets/images/icons/location.svg";
import { ReactComponent as Book } from "../../assets/images/icons/book.svg";

const useStyles = makeStyles((theme) => ({
	section_container: {
		left: "12%",
		paddingLeft: "5%",
		position: "absolute",
		top: "23%",
		width: "70%",
	},
	media: {
		borderRadius: "8px",
		boxShadow: "1px 1px 20px #100f10",
		marginRight: "5px",
		height: "180px",
		width: "190px",
		[theme.breakpoints.down("md")]: {
			width: "145px",
			height: "150px",
			marginLeft: "-10px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "90px",
			height: "95px",
			marginLeft: "-10px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "-5px",
			marginLeft: "75px",
		},
		[theme.breakpoints.between("320", "375")]: {
			marginLeft: "65px",
		},
		[theme.breakpoints.between("425", "500")]: {
			marginLeft: "100px",
		},
	},
	text_container: {
		marginLeft: "10px",
		position: "relative",
		width: "100%",
	},
	my_description: {
		width: "100%",
		marginTop: "-5px",
		fontSize: "1.5rem",
		lineHeight: "1.2",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.35rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.20rem",
			marginRight: "15px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1rem",
			marginTop: "10px",
		},
	},
	properties_container: {
		left: "5%",
		position: "relative",
		width: "100%",
		marginTop: "15px",
		[theme.breakpoints.down("md")]: {
			marginTop: "20px",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "25px",
			marginLeft: "-10px",
		},
	},
	property_text: {
		fontSize: "1.15rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1rem",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "5px",
		},
	},
	skills_container: {
		left: "15%",
		position: "absolute",
		top: "55%",
		width: "70%",
		height: "35%",
		marginTop: "5px",
		fontSize: "2.25rem",
	},
	skills_text: {
		fontSize: "3rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.75rem",
			marginTop: "25px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "1.75rem",
			marginTop: "130px",
		},
	},
	icons_container: {
		position: "relative",
		top: "60%",
		left: "15%",
	},
}));

function About() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={MyTheme}>
			<Card />
			<Grid
				className={classes.section_container}
				container
				direction="row"
				item
			>
				<Grid item>
					<CardMedia
						title="Profile picture about me"
						className={classes.media}
						image={ProfilePicture}
					/>
				</Grid>
				<Grid item sm container direction="row">
					<Grid className={classes.text_container}>
						<Typography
							className={classes.my_description}
							style={MyTheme.typographyKarla}
						>
							Me apasiona el desarrollo front-end, por lo que me capacito para
							aprender sobre nuevas tecnologías, que me permitan crecer tanto a
							nivel personal, como profesional.
						</Typography>
					</Grid>
					<Grid
						className={classes.properties_container}
						container
						direction="row"
						spacing={3}
					>
						<Grid container direction="row" sm="auto" md={3}>
							<Location />
							<Typography
								className={classes.property_text}
								gutterBottom
								style={MyTheme.typographyKarla}
							>
								Argentina
							</Typography>
						</Grid>
						<Grid container direction="row" sm="auto" md={9}>
							<Book />
							<Typography
								className={classes.property_text}
								gutterBottom
								style={MyTheme.typographyKarla}
							>
								Lic. en Ciencias de la Computación
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				item
				direction="column"
				className={classes.skills_container}
			>
				<Grid
					container
					direction="column"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Typography
						className={classes.skills_text}
						gutterbottom
						style={MyTheme.typographyRubik}
					>
						Habilidades
					</Typography>
				</Grid>
				<Grid container direction="row">
					<LogoContainer />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default About;
