/* Contact.js */
/* imports the Card and the icons components */
import Card from "../Card/Card";
import GitHubIcon from "./Screens/GitHubIcon/GitHubIcon";
import LinkedInIcon from "./Screens/LinkedInIcon/LinkedInIcon";
import TwitterIcon from "./Screens/TwitterIcon/TwitterIcon";
import LinkIcon from "./Screens/LinkIcon/LinkIcon";
/* import the css code from a relative route */
import "./Contact.css";
/* import the theme */
import MyTheme from "../../MyTheme";
/* imports for the MaterialUI library */
import {
	Box,
	Grid,
	IconButton,
	TextField,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/* import for the EmailJS library */
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
	section: {
		position: "absolute",
		width: "60%",
		left: "19%",
		top: "15%",
	},
	iconContainer: {
		border: "2px solid #100f10",
		marginBottom: "2rem",
		position: "relative",
		width: "100%",
		height: "60px",
		[theme.breakpoints.down("xs")]: {
			width: "110%",
			height: "50px",
			marginLeft: "-5px",
		},
	},
	iconContainerLight: {
		backgroundColor: MyTheme.palette.primary.main,
	},
	iconContainerDark: {
		backgroundColor: "#2a2a2a",
	},
	textFieldName: {
		margin: "0.7em 0.7em 1em 1.2em",
		width: "46%",
		[theme.breakpoints.down("md")]: {
			width: "94%",
			margin: "0.5em 0.7em 0.5em 1.2em",
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
		margin: "0.7em 0.5em 1em 0.2em",
		[theme.breakpoints.down("md")]: {
			margin: "0 0.7em 0.5em 1.2em",
			width: "94%",
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
	iconSpace: {
		width: "55px",
		height: "50px",
		marginLeft: "20px",
		marginTop: "3px",
		[theme.breakpoints.down("sm")]: {
			width: "45px",
			height: "45px",
			marginLeft: "25px",
		},
		[theme.breakpoints.down("xs")]: {
			width: "40px",
			height: "40px",
			marginLeft: "20px",
		},
	},
	iconMargin: {
		marginLeft: "-12px",
		marginTop: "-13px",
		[theme.breakpoints.down("xs")]: {
			marginTop: "-15px",
		},
	},
	icon: {
		width: "50px",
		height: "50px",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
		[theme.breakpoints.down("sm")]: {
			backgroundColor: "tomato",
			marginTop: "5px",
			width: "45px",
			height: "45px",
			marginLeft: "25px",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "20px",
			marginTop: "-15px",
		},
	},
	linkIcon: {
		cursor: "pointer",
		width: "50px",
		height: "50px",
		marginTop: "4px",
		marginLeft: "40px",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "20px",
			marginTop: "4px",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
		},
	},
	form: {
		border: "2px solid #100f10",
		padding: "2px",
		width: "99%",
		[theme.breakpoints.down("md")]: {
			marginTop: "-25px",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "0",
		},
		[theme.breakpoints.down("xs")]: {
			width: "108%",
			marginLeft: "-5px",
		},
	},
	formLight: {
		backgroundColor: MyTheme.palette.primary.main,
	},
	formDark: {
		backgroundColor: "#2a2a2a",
	},
	textFieldInput: {
		margin: "0 0 1em 1.2rem",
		border: "1px solid #100f10",
		width: "94%",
		[theme.breakpoints.down("md")]: {
			margin: "0 0 0.5em 1.2em",
		},
		[theme.breakpoints.down("sm")]: {
			width: "93%",
			marginLeft: "1em",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "0.5em",
			height: "100%",
		},
	},
	textFieldInputDark: {
		border: "0",
	},
	skills_text: {
		marginTop: "15px",
		fontSize: "3rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "2.65rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "15px",
			fontSize: "2.35rem",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "2rem",
			marginTop: "10px",
		},
	},
	skills_text_light: {
		color: MyTheme.palette.primary.main,
	},
	skills_text_dark: {
		color: MyTheme.palette.primary.dark,
	},
	send_button: {
		backgroundColor: "#37b9f1",
		border: "2px solid #37b9f1",
		borderRadius: "5px",
		boxShadow: "1px 1px 8px #100f10",
		color: "#f7f7fe",
		cursor: "pointer",
		fontSize: "20px",
		marginLeft: "20px",
		padding: "7px",
		width: "15%",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
		[theme.breakpoints.down("md")]: {
			width: "20%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "25%",
		},
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
			width: "40%",
			fontSize: "16px",
		},
		[theme.breakpoints.down(350)]: {
			fontSize: "14px",
		},
	},
	cancel_button: {
		backgroundColor: "#f7f7fe",
		border: "2px solid #37b9f1",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "20px",
		padding: "7px",
		width: "15%",
		boxShadow: "1px 1px 8px #100f10",
		marginLeft: "20px",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
		[theme.breakpoints.down("md")]: {
			width: "20%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "30%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "40%",
			fontSize: "16px",
		},
		[theme.breakpoints.down(350)]: {
			marginLeft: "10px",
			fontSize: "14px",
		},
	},
	textField: {
		background: "#3a3a3a",
	},
	input: {
		color: "white",
	},
}));

function Contact(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;
	const isMobile = props.isMobile;

	function openInNewTab(url) {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	}

	function sendMessage(e) {
		/* prevent reload page and then send the email with the values from the inputs and works with asynchronous */
		e.preventDefault();

		emailjs
			.sendForm(
				"service_oqksey9",
				"template_9kr5zyo",
				e.target,
				"user_DDXa2vjByng4wMUXQi3By"
			)
			.then(
				(result) => {
					alert("Tu información se ha enviado exitosamente!");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<ThemeProvider theme={MyTheme}>
			<Card darkMode={darkMode} />
			{darkMode ? (
				<Grid className={classes.section} container direction="column">
					<Typography
						className={`${classes.skills_text} ${classes.skills_text_light}`}
						style={MyTheme.typographyRubik}
					>
						Contacto
					</Typography>
					<Grid
						container
						direction="column"
						className={`${classes.iconContainer} ${classes.iconContainerDark}`}
					>
						{/* in this section if the dispositive isn't mobile, display the LinkIcon component */}
						{!isMobile ? (
							<Grid container className={classes.linkIcon}>
								<LinkIcon darkMode={darkMode} />
							</Grid>
						) : null}
						{/* Here in the next section, I display the LinkedIn, GitHub and Twitter icons for all devices */}
						<Grid container>
							<Grid container className={classes.iconSpace}>
								<IconButton
									className={classes.iconMargin}
									aria-label="linkedin.com"
									onClick={() =>
										openInNewTab(
											"https://www.linkedin.com/in/gabriel-fierro-2020/"
										)
									}
								>
									<LinkedInIcon darkMode={darkMode} className={classes.icon} />
								</IconButton>
							</Grid>
							<Grid container className={classes.iconSpace}>
								<IconButton
									className={classes.iconMargin}
									aria-label="github.com"
									onClick={() =>
										openInNewTab("https://github.com/GabrielFierro/")
									}
								>
									<GitHubIcon darkMode={darkMode} className={classes.icon} />
								</IconButton>
							</Grid>
							<Grid container className={classes.iconSpace}>
								<IconButton
									className={classes.iconMargin}
									aria-label="twitter.com"
									onClick={() =>
										openInNewTab("https://twitter.com/f_gabriel01")
									}
								>
									<TwitterIcon darkMode={darkMode} className={classes.icon} />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
					{/* Then display the form component with a input for the name, surname, email and a message */}
					<form
						className={`${classes.form} ${classes.formDark}`}
						container
						direction="column"
						onSubmit={sendMessage}
					>
						<TextField
							id="outlined-basic"
							placeholder="Nombre"
							minLength="2"
							maxLength="30"
							required
							size="small"
							type="text"
							variant="outlined"
							name="name"
							className={`${classes.textField} ${classes.textFieldName}`}
							InputProps={{
								className: classes.input,
							}}
							style={MyTheme.typographyRubik}
						/>
						<TextField
							id="outlined-basic1"
							placeholder="Apellido"
							minLength="2"
							maxlength="30"
							required
							size="small"
							type="text"
							variant="outlined"
							name="surname"
							className={`${classes.textField} ${classes.textFieldSurname}`}
							InputProps={{
								className: classes.input,
							}}
							style={MyTheme.typographyRubik}
						/>
						<TextField
							id="outlined-basic2"
							placeholder="Email"
							minLength="12"
							maxlength="50"
							required
							size="small"
							type="email"
							variant="outlined"
							name="email"
							className={`${classes.textField} ${classes.textFieldInput} ${classes.textFieldInputDark}`}
							InputProps={{
								className: classes.input,
							}}
							style={MyTheme.typographyRubik}
						/>
						<TextField
							id="outlined-basic3"
							placeholder="Mensaje"
							minLength="10"
							required
							type="text"
							variant="outlined"
							name="feedback"
							className={`${classes.textField} ${classes.textFieldInput}  ${classes.textFieldInputDark}`}
							InputProps={{
								className: classes.input,
							}}
						/>
						{/* Here are the buttons to send or reset the information of the form */}
						<Box className={classes.button_container}>
							<input
								type="submit"
								className={classes.send_button}
								value="Enviar"
								style={MyTheme.typographyRubik}
							/>
							<input
								type="reset"
								className={classes.cancel_button}
								value="Cancelar"
								style={MyTheme.typographyKarla}
							/>
						</Box>
					</form>
				</Grid>
			) : (
				<Grid className={classes.section} container direction="column">
					<Typography
						className={`${classes.skills_text} ${classes.skills_text_dark}`}
						style={MyTheme.typographyRubik}
					>
						Contacto
					</Typography>
					<Grid
						container
						direction="column"
						className={`${classes.iconContainer} ${classes.iconContainerLight}`}
					>
						{!isMobile ? (
							<Grid container className={classes.linkIcon}>
								<LinkIcon darkMode={darkMode} />
							</Grid>
						) : null}
						<Grid container>
							<Grid container className={classes.iconSpace}>
								<IconButton
									className={classes.iconMargin}
									aria-label="linkedin.com"
									onClick={() =>
										openInNewTab(
											"https://www.linkedin.com/in/gabriel-fierro-2020/"
										)
									}
								>
									<LinkedInIcon className={classes.icon} />
								</IconButton>
							</Grid>
							<Grid container className={classes.iconSpace}>
								<IconButton
									className={classes.iconMargin}
									aria-label="github.com"
									onClick={() =>
										openInNewTab("https://github.com/GabrielFierro/")
									}
								>
									<GitHubIcon className={classes.icon} />
								</IconButton>
							</Grid>
							<Grid container className={classes.iconSpace}>
								<IconButton
									className={classes.iconMargin}
									aria-label="twitter.com"
									onClick={() =>
										openInNewTab("https://twitter.com/f_gabriel01")
									}
								>
									<TwitterIcon className={classes.icon} />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
					{/* Then display the form component with a input for the name, surname, email and a message */}
					<form
						className={`${classes.form} ${classes.formLight}`}
						container
						direction="column"
						onSubmit={sendMessage}
					>
						<TextField
							className={classes.textFieldName}
							id="custom-name-field"
							placeholder="Nombre"
							minLength="3"
							maxLength="30"
							required
							size="small"
							style={{ border: "1px solid #100f10" }}
							type="text"
							variant="outlined"
							name="name"
						/>
						<TextField
							className={classes.textFieldSurname}
							id="custom-surname-field"
							placeholder="Apellido"
							minLength="2"
							maxLength="30"
							required
							size="small"
							style={{ border: "1px solid #100f10" }}
							type="text"
							variant="outlined"
							name="surname"
						/>
						<TextField
							className={classes.textFieldInput}
							id="custom-email-field"
							placeholder="Email"
							minLength="12"
							maxLength="50"
							required
							size="small"
							type="email"
							variant="outlined"
							name="email"
						/>
						<TextField
							className={classes.textFieldInput}
							id="custom-message-field"
							placeholder="Mensaje"
							minLength="10"
							required
							type="text"
							variant="outlined"
							name="feedback"
						/>
						<Box className={classes.button_container}>
							<input
								type="submit"
								className={classes.send_button}
								value="Enviar"
								style={MyTheme.typographyRubik}
							/>
							<input
								type="reset"
								className={classes.cancel_button}
								value="Cancelar"
								style={MyTheme.typographyKarla}
							/>
						</Box>
					</form>
				</Grid>
			)}
		</ThemeProvider>
	);
}

export default Contact;
