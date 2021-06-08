/* Navbar.js */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
	AppBar,
	IconButton,
	makeStyles,
	Menu,
	MenuItem,
	ThemeProvider,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
import MyTheme from "../../MyTheme";
import "./NavBar.css";
import { ReactComponent as MenuIcon } from "../../assets/images/icons/menu.svg";

// IMPORTING ICONS

const useStyles = makeStyles((theme) => ({
	typography: {
		fontSize: "1.75rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.35rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.85rem",
		},
		[theme.breakpoints.down("xs")]: {},
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(6),
	},
	title: {
		flexGrow: 1,
	},
}));

function NavBar() {
	const classes = useStyles();
	const [anchor, setAnchor] = React.useState(null);
	const open = Boolean(anchor);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const handleMenu = (event) => {
		setAnchor(event.currentTarget);
	};

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<nav>
					<Toolbar>
						<ThemeProvider theme={MyTheme}>
							<Typography
								className={classes.typography}
								style={MyTheme.typographyRubik}
							>
								{isMobile ? (
									<>
										<IconButton
											color="textPrimary"
											className={classes.menuButton}
											edge="start"
											aria-label="menu"
											onClick={handleMenu}
										>
											<MenuIcon />
										</IconButton>
										<Menu
											id="menu-appbar"
											anchorEl={anchor}
											anchorOrigin={{
												vertical: "top",
												horizontal: "right",
											}}
											KeepMounted
											transformOrigin={{
												vertical: "top",
												horizontal: "right",
											}}
											open={open}
										>
											<MenuItem
												onClick={() => setAnchor(null)}
												component={Link}
												to="/"
											>
												<Typography variant="h6"> Home </Typography>
											</MenuItem>
											<MenuItem
												onClick={() => setAnchor(null)}
												component={Link}
												to="/about"
											>
												<Typography variant="h6"> Acerca de mi </Typography>
											</MenuItem>
											<MenuItem
												onClick={() => setAnchor(null)}
												component={Link}
												to="/Experience"
											>
												<Typography variant="h6"> Experiencia </Typography>
											</MenuItem>
											<MenuItem
												onClick={() => setAnchor(null)}
												component={Link}
												to="/Project"
											>
												<Typography variant="h6"> Proyectos </Typography>
											</MenuItem>
											<MenuItem
												onClick={() => setAnchor(null)}
												component={Link}
												to="/Contact"
											>
												<Typography variant="h6"> Contacto </Typography>
											</MenuItem>
										</Menu>
									</>
								) : (
									<div style={{ marginRight: "2rem" }}>
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
									</div>
								)}
							</Typography>
						</ThemeProvider>
					</Toolbar>
				</nav>
			</AppBar>
		</div>
	);
}

export default NavBar;
