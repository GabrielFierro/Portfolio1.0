/* Contact.js */
import { useState } from "react";
import emailjs from "emailjs-com";
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
import GitHubIcon from "./Screens/GitHubIcon/GitHubIcon";
import LinkedInIcon from "./Screens/LinkedInIcon/LinkedInIcon";
import TwitterIcon from "./Screens/TwitterIcon/TwitterIcon";
import LinkIcon from "./Screens/LinkIcon/LinkIcon";

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
		backgroundColor: MyTheme.palette.primary.main,
		height: "60px",
	},
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
	iconSpace: {
		width: "50px",
		height: "50px",
		marginLeft: "30px",
		marginTop: "5px",
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
	icon: {
		width: "50px",
		height: "50px",
		"&:hover": {
			boxShadow: "3px 3px 10px #37b9f1",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "5px",
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
	linkIcon: {
		width: "50px",
		height: "50px",
		marginTop: "4px",
		marginLeft: "30px",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "20px",
			marginTop: "4px",
		},
	},
	gridMarginLeft: {
		marginLeft: "0px",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
		},
	},
	form: {
		backgroundColor: MyTheme.palette.primary.main,
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
	skills_text: {
		marginTop: "10px",
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
			marginTop: "20px",
		},
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
			width: "30%",
		},
	},
	cancel_button: {
		backgroundColor: "#f7f7fe",
		border: "2px solid #37b9f1",
		borderRadius: "5px",
		color: "#100f10",
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
			width: "25%",
		},
		[theme.breakpoints.down("xs")]: {
			width: "35%",
		},
	},
}));

function Contact() {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();

	function sendMessage(e) {
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
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<ThemeProvider theme={MyTheme}>
			<Card />
			<Grid className={classes.section} container direction="column">
				<Typography
					className={classes.skills_text}
					style={MyTheme.typographyRubik}
				>
					Contacto
				</Typography>
				<Grid container direction="column" className={classes.iconContainer}>
					<Grid container className={classes.linkIcon}>
						<LinkIcon />
					</Grid>
					<Grid container>
						<Grid container className={classes.iconSpace}>
							<Link
								href="https://www.linkedin.com/in/gabriel-fierro-2020/"
								onClick={preventDefault}
							>
								<LinkedInIcon className={classes.icon} />
							</Link>
						</Grid>
						<Grid container className={classes.iconSpace}>
							<Link
								href="https://github.com/GabrielFierro/"
								onClick={preventDefault}
							>
								<GitHubIcon className={classes.icon} />
							</Link>
						</Grid>
						<Grid container className={classes.iconSpace}>
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
					container
					direction="column"
					alignItems="center"
					justify="center"
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
						style={{ marginRight: "0.7em", border: "1px solid #100f10" }}
						testID="change-placeholder-color"
						type="text"
						variant="outlined"
						name="name"
					/>
					<TextField
						className={classes.textFieldSurname}
						id="custom-surname-field"
						placeholder="Apellido"
						minLength="2"
						maxlength="30"
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
						maxlength="50"
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
						/>
						<input
							type="reset"
							className={classes.cancel_button}
							value="Cancelar"
						/>
					</Box>
				</form>
			</Grid>
		</ThemeProvider>
	);
}

export default Contact;
