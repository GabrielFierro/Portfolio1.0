import { React, useState } from "react";
import { createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import "./index.css";

/* Navbar.js */
import { Link, NavLink } from "react-router-dom";
import {
	AppBar,
	IconButton,
	Grid,
	makeStyles,
	Menu,
	MenuItem,
	ThemeProvider,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
import MaterialSwitch from "@material-ui/core/Switch";
import MyTheme from "./MyTheme";
import { ReactComponent as MenuIcon } from "./assets/images/icons/menu.svg";

/* Background */
import Background from "./components/Background/Background";

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
	backgroundContainer: {
		height: "100vh",
		objectFit: "contain",
		width: "100%",
	},
	background: {
		height: "100vh",
		objectFit: "cover",
		position: "absolute",
		width: "100%",
		zIndex: -1,
	},
}));

function App() {
	const classes = useStyles();
	const [anchor, setAnchor] = useState(null);
	const open = Boolean(anchor);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const handleMenu = (event) => {
		setAnchor(event.currentTarget);
	};

	const [darkMode, setDarkMode] = useState(false);

	const lightTheme = createMuiTheme({
		palette: {
			primary: {
				main: "#37b9f1",
			},
		},
	});

	const darkTheme = createMuiTheme({
		palette: {
			type: "dark",
			primary: {
				main: "#1a1919",
			},
		},
	});

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Router>
			<Grid className={classes.root}>
				<AppBar position="fixed">
					<nav>
						<Toolbar>
							<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
										<Grid style={{ marginRight: "2rem" }}>
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
										</Grid>
									)}
								</Typography>
								<MaterialSwitch
									checked={darkMode}
									onChange={() => {
										handleDarkMode();
									}}
								/>
							</ThemeProvider>
						</Toolbar>
					</nav>
				</AppBar>
			</Grid>
			<Switch>
				<Route exact path="/">
					<Home darkMode={darkMode} />
				</Route>
				<Route exact path="/about">
					<About darkMode={darkMode} />
				</Route>
				<Route exact path="/experience">
					<Experience darkMode={darkMode} />
				</Route>
				<Route exact path="/project">
					<Project darkMode={darkMode} />
				</Route>
				<Route exact path="/contact">
					<Contact darkMode={darkMode} />
				</Route>
			</Switch>
			<Background darkMode={darkMode} />
		</Router>
	);
}

export default App;
