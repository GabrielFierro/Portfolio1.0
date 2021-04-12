/* Contact.js */
import "./Contact.css";
import Card from "../Card/Card";
import MyTheme from "../../MyTheme";
import {
	Button,
	Grid,
	Link,
	TextField,
	Typography,
	ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
	button: {
		marginLeft: "20px",
		marginBottom: "15px",
		[theme.breakpoints.down("md")]: {
			height: "35px",
			marginBottom: "5px",
		},
	},
	icon: {
		width: "50px",
		height: "50px",
		marginLeft: "30px",
		[theme.breakpoints.down("sm")]: {
			width: "40px",
			height: "40px",
			marginLeft: "25px",
			marginTop: "5px",
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
		width: "100%",
		[theme.breakpoints.down("xs")]: {
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
					<Grid
						className={classes.gridMarginLeft}
						container
						style={{ marginTop: "5px" }}
					>
						<Link
							href="https://www.linkedin.com/in/gabriel-fierro-2020/"
							onClick={preventDefault}
						>
							<div className={classes.icon}>
								<svg
									class="icon-hover"
									viewBox="0 0 55 55"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M41.25 9.16675H13.75C11.2187 9.16675 9.16667 11.2188 9.16667 13.7501V41.2501C9.16667 43.7814 11.2187 45.8334 13.75 45.8334H41.25C43.7813 45.8334 45.8333 43.7814 45.8333 41.2501V13.7501C45.8333 11.2188 43.7813 9.16675 41.25 9.16675Z"
										stroke="#100F10"
										stroke-width="2.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M18.3333 25.2083V36.6666"
										stroke="#100F10"
										stroke-width="2.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M18.3333 18.3333V18.3562"
										stroke="#100F10"
										stroke-width="2.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M27.5 36.6666V25.2083"
										stroke="#100F10"
										stroke-width="2.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M36.6667 36.6666V29.7916C36.6667 28.576 36.1838 27.4102 35.3242 26.5507C34.4647 25.6911 33.2989 25.2083 32.0833 25.2083C30.8678 25.2083 29.702 25.6911 28.8424 26.5507C27.9829 27.4102 27.5 28.576 27.5 29.7916"
										stroke="#100F10"
										stroke-width="2.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</Link>
						<Link
							href="https://github.com/GabrielFierro/"
							onClick={preventDefault}
						>
							<div className={classes.icon}>
								<svg
									class="icon-hover"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M31.25 43.75V36.4584C31.25 34.375 31.4583 33.5417 30.2083 32.2917C36.0417 31.6667 41.6667 29.375 41.6667 19.7917C41.6641 17.302 40.6928 14.9111 38.9583 13.125C39.7718 10.9625 39.6969 8.56591 38.75 6.45835C38.75 6.45835 36.4583 5.83335 31.4583 9.16669C27.2234 8.06374 22.7766 8.06374 18.5417 9.16669C13.5417 5.83335 11.25 6.45835 11.25 6.45835C10.3031 8.56591 10.2282 10.9625 11.0417 13.125C9.30719 14.9111 8.33587 17.302 8.33333 19.7917C8.33333 29.375 13.9583 31.6667 19.7917 32.2917C18.5417 33.5417 18.5417 34.7917 18.75 36.4584V43.75M18.75 39.5834C9.79167 42.5 9.79167 34.375 6.25 33.3334L18.75 39.5834Z"
										stroke="#100F10"
										stroke-width="2.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</Link>
						<Link
							href="https://twitter.com/f_gabriel01"
							onClick={preventDefault}
						>
							<div className={classes.icon}>
								<svg
									class="icon-hover"
									viewBox="0 0 55 55"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M50.4167 9.18949C48.125 10.3124 45.8792 10.7685 43.5417 11.4582C40.9727 8.55928 37.164 8.39887 33.5042 9.76928C29.8444 11.1397 27.4473 14.4901 27.5 18.3332V20.6249C20.0635 20.8151 13.4406 17.428 9.16667 11.4582C9.16667 11.4582 -0.417086 28.4922 18.3333 36.6666C14.0433 39.5243 9.76479 41.4516 4.58333 41.2499C12.1642 45.3818 20.4256 46.8026 27.5779 44.7264C35.7821 42.343 42.5242 36.1945 45.1115 26.9843C45.8833 24.1831 46.2665 21.2892 46.2504 18.3837C46.2458 17.813 49.7108 12.0312 50.4167 9.1872V9.18949Z"
										stroke="#100F10"
										stroke-width="2.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</Link>
					</Grid>
				</Grid>
				<form
					className={classes.form}
					item
					container
					direction="column"
					alignItems="center"
					justify="center"
					style={{ background: "#f7f7fe", border: "2px solid #100f10" }}
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
					<Button
						className={classes.button}
						style={MyTheme.palette.buttonSend}
						variant="contained"
					>
						<div
							style={
								(MyTheme.typographyRubik, { color: "white", fontSize: "20px" })
							}
						>
							Enviar
						</div>
					</Button>
					<Button
						className={classes.button}
						style={MyTheme.palette.buttonCancel}
					>
						<div style={(MyTheme.typographyKarla, { fontSize: "20px" })}>
							Cancelar
						</div>
					</Button>
				</form>
			</div>
		</ThemeProvider>
	);
}

export default Contact;
