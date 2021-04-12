import "./Presentation.css";
import MyTheme from "../../MyTheme";
import { ThemeProvider } from "@material-ui/core";

function Presentation() {
	return (
		<article>
			<ThemeProvider theme={MyTheme}>
				<div className="card">
					<p className="title" style={MyTheme.typographyRubik}>
						Hola, me llamo Gabriel Fierro.
						<p style={{ margin: "0px" }}>
							Soy un desarrollador
							<span color="secondary.light"> front-end </span>creativo.
						</p>
					</p>
				</div>
			</ThemeProvider>
		</article>
	);
}

export default Presentation;
