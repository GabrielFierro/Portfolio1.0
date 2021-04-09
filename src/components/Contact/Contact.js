/* Contact.js */
import "./Contact.css";
import "../../assets/fonts/fonts.css";
import Card from "../Card/Card";
import MyTheme from "../../MyTheme";
import {
	Button,
	Grid,
	TextField,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import linkIcon from "../../assets/images/icons/link-icon.svg";
import linkLinkedIn from "../../assets/images/icons/linkedIn-icon.svg";
import linkGitHub from "../../assets/images/icons/github-icon.svg";
import linkTwitter from "../../assets/images/icons/twitter-icon.svg";

const useStyles = makeStyles((theme) => ({
	textField: {
		width: "48%",
		marginBottom: "0.5em",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			marginBottom: "0.5em",
		},
	},
	marginButton: {
		margin: "5px",
	},
	icon: {
		width: "55px",
		height: "55px",
		marginLeft: "80px",
		[theme.breakpoints.down("sm")]: {
			width: "40px",
			height: "40px",
			marginLeft: "25px",
			marginTop: "5px",
		},
	},
	gridMarginLeft: {
		marginLeft: "80px",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10px",
		},
	},
}));

function Contact() {
	const classes = useStyles();
	return (
		<div>
			<Card />
			<div class="section">
				<Typography class="text" align="center" gutterBottom id="rubik">
					Contacto
				</Typography>
				<Grid class="icon-container">
					<img
						alt="link icon"
						src={linkIcon}
						style={{
							width: "55px",
							height: "55px",
							marginLeft: "20px",
							marginTop: "3px",
						}}
					/>
					<Grid
						className={classes.gridMarginLeft}
						container
						style={{ marginTop: "5px" }}
					>
						<img
							alt="LinkedIn icon"
							className={classes.icon}
							src={linkLinkedIn}
						/>
						<img alt="GitHub icon" className={classes.icon} src={linkGitHub} />
						<img
							alt="Twitter icon"
							className={classes.icon}
							src={linkTwitter}
						/>
					</Grid>
				</Grid>
				<form
					item
					container
					direction="column"
					alignItems="center"
					justify="center"
				>
					<TextField
						className={classes.textField}
						id="custom-name-field"
						label="Nombre"
						maxlength="30"
						required
						size="small"
						style={{ marginRight: "1.8em", border: "1px solid #100f10" }}
						type="text"
						variant="outlined"
					/>
					<TextField
						className={classes.textField}
						id="custom-surname-field"
						label="Apellido"
						maxlength="30"
						required
						size="small"
						style={{ border: "1px solid #100f10" }}
						type="text"
						variant="outlined"
					/>
					<TextField
						fullWidth
						id="custom-email-field"
						label="Email"
						maxlength="50"
						required
						size="small"
						style={{ marginBottom: "0.5em", border: "1px solid #100f10" }}
						type="email"
						variant="outlined"
					/>
					<TextField
						fullWidth
						id="custom-message-field"
						label="Mensaje"
						maxlength="10"
						required
						style={{ marginBottom: "0.5em", border: "1px solid #100f10" }}
						type="text"
						variant="outlined"
					/>
					<ThemeProvider theme={MyTheme}>
						<Button
							className={classes.marginButton}
							style={MyTheme.palette.buttonSend}
							variant="contained"
						>
							<div id="rubik" style={{ color: "white", fontSize: "20px" }}>
								Enviar
							</div>
						</Button>
						<Button style={MyTheme.palette.buttonCancel}>
							<div id="karla" style={{ fontSize: "20px" }}>
								Cancelar
							</div>
						</Button>
					</ThemeProvider>
				</form>
			</div>
		</div>
	);
}

export default Contact;
