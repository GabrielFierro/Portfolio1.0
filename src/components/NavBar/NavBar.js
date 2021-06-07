/* Navbar.js */

import { NavLink } from "react-router-dom";
import {
	AppBar,
	makeStyles,
	ThemeProvider,
	Toolbar,
	Typography,
} from "@material-ui/core";
import MyTheme from "../../MyTheme";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
	typography: {
		fontSize: "1.75rem",
		backgroundColor: "lightred",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.35rem",
			backgroundColor: "lightblue",
		},
		[theme.breakpoints.down("sm")]: {
			backgroundColor: "tomato",
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {
			backgroundColor: "teal",
		},
	},
}));

function NavBar() {
	const classes = useStyles();

	return (
		<AppBar position="fixed">
			<nav>
				<Toolbar>
					<ThemeProvider theme={MyTheme}>
						<Typography
							className={classes.typography}
							style={MyTheme.typographyRubik}
						>
							<NavLink exact to="/">
								Home
							</NavLink>
							<NavLink exact to="/about">
								Acerca de mi
							</NavLink>
							<NavLink exact to="/experience">
								Experiencia
							</NavLink>
							<NavLink exact to="/project">
								Proyectos
							</NavLink>
							<NavLink exact to="/contact">
								Contacto
							</NavLink>
						</Typography>
					</ThemeProvider>
				</Toolbar>
			</nav>
		</AppBar>
	);
}

export default NavBar;
