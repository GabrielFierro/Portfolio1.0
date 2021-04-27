/* About.js */
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card";
import ProfilePicture from "../../assets/images/profile/gabifierro.jpg";
import MyTheme from "../../MyTheme";
import Logo from "./Logo/Logo";

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
			display: "flex",
			textAlign: "center",
			marginLeft: "80px",
			width: "75px",
			height: "75px",
		},
		[theme.breakpoints.between("320", "375")]: {
			marginLeft: "65px",
		},
		[theme.breakpoints.between("425", "500")]: {
			marginLeft: "100px",
		},
	},
	text_container: {
		left: "5%",
		position: "relative",
		width: "100%",
	},
	my_description: {
		marginTop: "-5px",
		marginRight: "5px",
		fontSize: "1.5rem",
		lineHeight: "1.2",
		[theme.breakpoints.down("md")]: {
			fontSize: "24px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px",
			marginLeft: "10px",
			marginRight: "-35px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "16px",
			marginLeft: "5px",
			marginRight: "-70px",
		},
	},
	properties_container: {
		left: "5%",
		position: "relative",
		width: "100%",
	},
	property_text: {
		fontSize: "1.15rem",
		marginTop: "5px",
		marginLeft: "8px",
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
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "3rem",
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
						container
						xs={12}
						sm
						direction="row"
						className={classes.properties_container}
						style={{ marginTop: "25px" }}
					>
						<Grid container direction="row" xs={4}>
							<svg
								class="icon icon-tabler icon-tabler-map-pin"
								fill="none"
								height="30"
								stroke="#37B9F1"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								width="30"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="12" cy="11" r="3" />
								<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
							</svg>
							<Typography
								className={classes.property_text}
								gutterBottom
								style={MyTheme.typographyKarla}
							>
								Argentina
							</Typography>
						</Grid>
						<Grid container direction="row" sm>
							<svg
								class="icon icon-tabler icon-tabler-book"
								fill="none"
								height="30"
								stroke="#37B9F1"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								width="30"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
								<path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
								<line x1="3" y1="6" x2="3" y2="19" />
								<line x1="12" y1="6" x2="12" y2="19" />
								<line x1="21" y1="6" x2="21" y2="19" />
							</svg>
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
				<Grid container item direction="column">
					<Typography
						className={classes.skills_text}
						gutterbottom
						style={MyTheme.typographyRubik}
					>
						Habilidades
					</Typography>
				</Grid>
				<Grid container xs={3} sm direction="row">
					<Logo />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default About;
