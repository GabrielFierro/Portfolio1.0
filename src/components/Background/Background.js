/* Background.js */
import "./Background.css";
import BackgroundLight from "../../assets/images/background/city-light-desktop.jpg";
import BackgroundDark from "../../assets/images/background/city-dark-desktop.jpg";

function Background(props) {
	const darkMode = props.darkMode;

	return (
		<div className="container">
			{darkMode ? (
				<img
					alt="City background"
					className="background"
					src={BackgroundDark}
				/>
			) : (
				<img
					alt="City background"
					className="background"
					src={BackgroundLight}
				/>
			)}
		</div>
	);
}

export default Background;
