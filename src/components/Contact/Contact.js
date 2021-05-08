/* Contact.js */
import "./Contact.css";
import Card from "../Card/Card";
import MyTheme from "../../MyTheme";
import {
	Box,
	Grid,
	Link,
	TextField,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import LinkedInIcon from "./Screens/LinkedInIcon/LinkedInIcon.js";
import GitHubIcon from "./Screens/GitHubIcon/GitHubIcon.js";
import TwitterIcon from "./Screens/TwitterIcon/TwitterIcon.js";

const useStyles = makeStyles((theme) => ({
	textFieldName: {
		width: "46%",
		marginBottom: "0.5em",
		marginLeft: "1.2em",
		marginTop: "10px",
		[theme.breakpoints.down("md")]: {
			width: "94%",
			marginLeft: "1.2em",
		},
		[theme.breakpoints.down("sm")]: {
			width: "93%",
			marginLeft: "1em",
		},
		[theme.breakpoints.down("xs")]: {
			width: "93%",
			marginLeft: "0.5em",
		},
	},
	textFieldSurname: {
		width: "46%",
		marginBottom: "0.5em",
		marginLeft: "0.2em",
		marginTop: "10px",
		[theme.breakpoints.down("md")]: {
			width: "94%",
			marginLeft: "1.2em",
			marginTop: "0px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "93%",
			marginLeft: "1em",
		},
		[theme.breakpoints.down("xs")]: {
			width: "93%",
			marginLeft: "0.5em",
		},
	},
	button_container: {
		marginTop: "5px",
		marginBottom: "15px",
	},
	icon: {
		width: "50px",
		height: "50px",
		marginLeft: "30px",
		marginTop: "5px",
		[theme.breakpoints.down("sm")]: {
			width: "40px",
			height: "40px",
			marginLeft: "25px",
		},
	},
	linkIcon: {
		width: "55px",
		height: "55px",
		marginLeft: "30px",
		marginTop: "5px",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "20px",
			marginTop: "7px",
		},
	},
	gridMarginLeft: {
		marginLeft: "20px",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
		},
	},
	form: {
		backgroundColor: "#f7f7fe",
		border: "2px solid #100f10",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			marginTop: "-25px",
			width: "100%",
		},
	},
	textFieldInput: {
		marginBottom: "0.5em",
		border: "1px solid #100f10",
		marginRight: "2em",
		width: "94%",
		marginLeft: "1.2em",
		[theme.breakpoints.down("md")]: {
			width: "94%",
			marginLeft: "1.2em",
		},
		[theme.breakpoints.down("sm")]: {
			width: "93%",
			marginLeft: "1em",
		},
		[theme.breakpoints.down("xs")]: {
			width: "93%",
			marginLeft: "0.5em",
		},
	},
}));

function Contact() {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	return (
		<ThemeProvider theme={MyTheme}>
			<Card />
			<div class="section">
				<Typography
					class="text"
					align="center"
					gutterBottom
					style={MyTheme.typographyRubik}
				>
					Contacto
				</Typography>
				<Grid class="icon-container">
					<div className={classes.linkIcon}>
						<svg
							class="icon-hover"
							viewBox="0 0 65 65"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="32.5" cy="32.5" r="32.5" fill="#1A1919" />
							<path
								d="M19 39.5C22.0376 39.5 24.5 37.0376 24.5 34C24.5 30.9624 22.0376 28.5 19 28.5C15.9624 28.5 13.5 30.9624 13.5 34C13.5 37.0376 15.9624 39.5 19 39.5Z"
								stroke="#F7F7FE"
								stroke-width="2.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M41 28.5C44.0376 28.5 46.5 26.0376 46.5 23C46.5 19.9624 44.0376 17.5 41 17.5C37.9624 17.5 35.5 19.9624 35.5 23C35.5 26.0376 37.9624 28.5 41 28.5Z"
								stroke="#F7F7FE"
								stroke-width="2.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M41 50.5C44.0376 50.5 46.5 48.0376 46.5 45C46.5 41.9624 44.0376 39.5 41 39.5C37.9624 39.5 35.5 41.9624 35.5 45C35.5 48.0376 37.9624 50.5 41 50.5Z"
								stroke="#F7F7FE"
								stroke-width="2.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M23.95 31.6166L36.05 25.3833"
								stroke="#F7F7FE"
								stroke-width="2.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M23.95 36.3833L36.05 42.6166"
								stroke="#F7F7FE"
								stroke-width="2.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<Grid className={classes.gridMarginLeft} container>
						<Grid className={classes.icon}>
							<Link
								href="https://www.linkedin.com/in/gabriel-fierro-2020/"
								onClick={preventDefault}
							>
								<LinkedInIcon className={classes.icon} />
							</Link>
						</Grid>
						<Grid className={classes.icon}>
							<Link
								href="https://github.com/GabrielFierro/"
								onClick={preventDefault}
							>
								<GitHubIcon className={classes.icon} />
							</Link>
						</Grid>
						<Grid className={classes.icon}>
							<Link
								href="https://twitter.com/f_gabriel01"
								onClick={preventDefault}
							>
								<TwitterIcon className={classes.icon} />
							</Link>
						</Grid>
					</Grid>
				</Grid>
				<form
					className={classes.form}
					item
					container
					direction="column"
					alignItems="center"
					justify="center"
				>
					<TextField
						className={classes.textFieldName}
						id="custom-name-field"
						placeholder="Nombre"
						maxlength="30"
						required
						size="small"
						style={{ marginRight: "0.7em", border: "1px solid #100f10" }}
						testID="change-placeholder-color"
						type="text"
						variant="outlined"
					/>
					<TextField
						className={classes.textFieldSurname}
						id="custom-surname-field"
						placeholder="Apellido"
						maxlength="30"
						required
						size="small"
						style={{ border: "1px solid #100f10" }}
						type="text"
						variant="outlined"
					/>
					<TextField
						className={classes.textFieldInput}
						id="custom-email-field"
						placeholder="Email"
						maxlength="50"
						required
						size="small"
						type="email"
						variant="outlined"
					/>
					<TextField
						className={classes.textFieldInput}
						id="custom-message-field"
						placeholder="Mensaje"
						maxlength="10"
						required
						type="text"
						variant="outlined"
					/>
					<Box className={classes.button_container}>
						<ButtonPrimary className={classes.send_button} name="Enviar" />
						<ButtonSecondary
							className={classes.cancel_button}
							name="Cancelar"
						/>
					</Box>
				</form>
			</div>
		</ThemeProvider>
	);
}

export default Contact;
