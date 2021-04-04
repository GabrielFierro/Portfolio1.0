/* Contact.js */
import "./Contact.css";
import "../../assets/fonts/fonts.css";
import Card from "../Card/Card";

function Contact() {
	return (
		<div>
			<Card />
			<section class="section">
				<h1 class="text" id="rubik">
					Contacto
				</h1>
				<div class="icon-container">
					<p>A</p>
					<p>B</p>
					<p>C</p>
					<p>D</p>
				</div>
				<form class="form">
					<input
						class="input"
						id="name"
						maxlength="30"
						placeholder="Nombre"
						required
						type="text"
					/>
					<input
						class="input"
						id="surname"
						maxlength="30"
						placeholder="Apellido"
						type="text"
					/>
					<input
						class="input"
						id="email"
						maxLength="50"
						placeholder="Email"
						required
						type="email"
					/>
					<input
						class="input"
						id="message"
						minLength="20"
						placeholder="Message"
						required
						type="text"
					/>
					<button>A</button>
					<button>B</button>
				</form>
			</section>
		</div>
	);
}

export default Contact;
