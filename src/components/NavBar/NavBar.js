/* Navbar.js */

import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MyTheme from "../../MyTheme";
import { ThemeProvider } from "@material-ui/core";
import "./NavBar.css";

function NavBar(props) {
	return (
		<AppBar position="fixed">
			<nav>
				<Toolbar>
					<ThemeProvider theme={MyTheme}>
						<Typography variant="h5" style={MyTheme.typographyRubik}>
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
