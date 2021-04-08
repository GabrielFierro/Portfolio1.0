/* About.js */
import Card from "../Card/Card";
import ProfilePicture from "../../assets/images/profile/gabifierro.jpg";
import "./About.css";
import "../../assets/fonts/fonts.css";

function About() {
	return (
		<div>
			<Card />
			<section className="section-container">
				<div class="container-flex">
					<div class="image-container">
						<img alt="profile" className="image" src={ProfilePicture} />
					</div>
					<div class="description-container" id="karla">
						<div>
							<p class="format">
								Me apasiona el desarrollo front-end, por lo que me capacito para
								aprender sobre nuevas tecnologías, que me permitan crecer tanto
								a nivel personal, como profesional.
							</p>
						</div>
						<div>
							<div class="flexible">
								<i>
									<svg
										class="icon icon-tabler icon-tabler-map-pin"
										fill="none"
										height="30"
										stroke="#37B9F1"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										width="30"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<circle cx="12" cy="11" r="3" />
										<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
									</svg>
								</i>
								<p class="description-text">Argentina</p>
							</div>
							<div class="flexible">
								<i>
									<svg
										class="icon icon-tabler icon-tabler-book"
										fill="none"
										height="30"
										stroke="#37B9F1"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										width="30"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
										<path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
										<line x1="3" y1="6" x2="3" y2="19" />
										<line x1="12" y1="6" x2="12" y2="19" />
										<line x1="21" y1="6" x2="21" y2="19" />
									</svg>
								</i>
								<p class="description-text">
									Licenciatura en Ciencias de la Computación
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
