/* About.js */
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card";
import ProfilePicture from "../../assets/images/profile/gabifierro.jpg";
import "./About.css";
import theme from "../../MyTheme";

const useStyles = makeStyles({
	media: {
		bordeRadius: "8px",
		boxShadow: "2px 2px 20px #100f10",
		height: "220px",
		marginLeft: "40px",
		marginTop: "25px",
		width: "220px",
		[theme.breakpoints.down("md")]: {
			width: "185px",
			height: "185px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "150px",
			height: "150px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "110px",
			height: "110px",
			marginLeft: "-10px",
		},
	},
	description: {
		width: "60%",
		marginTop: "13px",
		marginLeft: "30px",
	},
});

function About() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Card />
			<Grid className="section-container">
				<Grid className="description-container">
					<CardMedia
						title="Profile picture"
						className={classes.media}
						image={ProfilePicture}
					/>
					<Grid className={classes.description} container direction="column">
						<Typography
							variant="subtitle1"
							style={(theme.typographyKarla, { fontSize: "24px" })}
						>
							Me apasiona el desarrollo front-end, por lo que me capacito para
							aprender sobre nuevas tecnologías, que me permitan crecer tanto a
							nivel personal, como profesional.
						</Typography>
						<div class="flexible">
							<i>
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
							</i>
							<Typography
								style={
									(theme.typographyKarla,
									{ marginLeft: "5px", fontSize: "20px" })
								}
							>
								Argentina
							</Typography>
						</div>
						<div class="flexible">
							<i>
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
							</i>
							<Typography
								style={
									(theme.typographyKarla,
									{ marginLeft: "5px", fontSize: "20px" })
								}
							>
								Licenciatura en Ciencias de la Computación
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default About;
