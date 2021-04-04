/* Background.js */
import "./Background.css";
import background from "../../assets/images/background/city-light-desktop.jpg";

function Background() {
	return (
		<div className="container">
			<img alt="City background" className="background" src={background}></img>
		</div>
	);
}

export default Background;
