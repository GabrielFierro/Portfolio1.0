/* Contact.js */
import "./Contact.css";
import "../../assets/fonts/fonts.css";
import Card from "../Card/Card";
import {
	Button,
	Grid,
	TextField,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import MyTheme from "../../MyTheme";

function Contact() {
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
						id="custom-name-field"
						label="Nombre"
						maxlength="30"
						required
						style={{ marginRight: "1em", width: "48%" }}
						type="text"
						variant="outlined"
					/>
					<TextField
						id="custom-surname-field"
						label="Apellido"
						maxlength="30"
						required
						style={{ marginLeft: "0.7em", width: "48%" }}
						type="text"
						variant="outlined"
					/>
					<TextField
						fullWidth
						id="custom-email-field"
						label="Email"
						maxlength="50"
						required
						style={{ marginBottom: "0.5em", marginTop: "0.5em" }}
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
						<Button style={MyTheme.palette.accent} variant="contained">
							<div style={{ color: "white" }}>Enviar</div>
						</Button>
						<Button variant="outlined">
							<div style={{ color: "#100f10" }}>Cancelar</div>
						</Button>
					</ThemeProvider>
				</form>
			</div>
		</div>
	);
}

export default Contact;
