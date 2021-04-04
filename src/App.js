import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Background from "./components/Background/Background";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import "./index.css";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#f7f7fe",
			dark: "#1a1919",
		},
		secondary: {
			main: "#100f10",
		},
		tertiary: {
			main: "#37b9f1",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/experience">
						<Experience />
					</Route>
					<Route exact path="/project">
						<Project />
					</Route>
				</Switch>
				<Background />
			</Router>
		</ThemeProvider>
	);
}

export default App;
