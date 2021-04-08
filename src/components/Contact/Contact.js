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
				<Grid container class="icon-container" fullWidth>
					<p>A</p>
					<p>B</p>
					<p>C</p>
					<p>D</p>
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
						style={{ marginRight: "1.7em" }}
						type="text"
						variant="outlined"
					/>
					<TextField
						className={classes.textField}
						id="custom-surname-field"
						label="Apellido"
						maxlength="30"
						required
						type="text"
						variant="outlined"
					/>
					<TextField
						fullWidth
						id="custom-email-field"
						label="Email"
						maxlength="50"
						required
						style={{ marginBottom: "0.5em" }}
						type="email"
						variant="outlined"
					/>
					<TextField
						fullWidth
						id="custom-message-field"
						label="Mensaje"
						maxlength="100"
						required
						style={{ marginBottom: "0.5em" }}
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
