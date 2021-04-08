import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#f7f7fe",
			dark: "#1a1919",
		},
		secondary: {
			main: "#100f10",
		},
		buttonCancel: {
			backgroundColor: "#f7f7fe",
			contrastText: "#37b9f1",
			border: "1px solid #37b9f1",
		},
		buttonSend: {
			backgroundColor: "#37b9f1",
			constrastText: "#f7f7fe",
		},
	},
});
