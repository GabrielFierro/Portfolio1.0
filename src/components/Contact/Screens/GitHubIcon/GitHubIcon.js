/* TwitterIcon.js */
import "../../Contact.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	icon: {
		width: "55px",
		height: "55px",
		[theme.breakpoints.down("sm")]: {
			height: "50px",
			width: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "45px",
			width: "45px",
		},
	},
}));

function GitHubIcon(props) {
	const classes = useStyles();
	const darkMode = props.darkMode;

	return (
		<Grid class="icon-hover">
			{darkMode ? (
				<svg
					className={classes.icon}
					width="55"
					height="55"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M31.25 43.75V36.4584C31.25 34.375 31.4583 33.5417 30.2083 32.2917C36.0417 31.6667 41.6667 29.375 41.6667 19.7917C41.6641 17.302 40.6928 14.9111 38.9583 13.125C39.7718 10.9625 39.6969 8.56591 38.75 6.45835C38.75 6.45835 36.4583 5.83335 31.4583 9.16669C27.2234 8.06374 22.7766 8.06374 18.5417 9.16669C13.5417 5.83335 11.25 6.45835 11.25 6.45835C10.3031 8.56591 10.2282 10.9625 11.0417 13.125C9.30719 14.9111 8.33587 17.302 8.33333 19.7917C8.33333 29.375 13.9583 31.6667 19.7917 32.2917C18.5417 33.5417 18.5417 34.7917 18.75 36.4584V43.75M18.75 39.5834C9.79167 42.5 9.79167 34.375 6.25 33.3334L18.75 39.5834Z"
						stroke="#f7f7fe"
						strokeWidth="2.75"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			) : (
				<svg
				className={classes.icon}
					width="55"
					height="55"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M31.25 43.75V36.4584C31.25 34.375 31.4583 33.5417 30.2083 32.2917C36.0417 31.6667 41.6667 29.375 41.6667 19.7917C41.6641 17.302 40.6928 14.9111 38.9583 13.125C39.7718 10.9625 39.6969 8.56591 38.75 6.45835C38.75 6.45835 36.4583 5.83335 31.4583 9.16669C27.2234 8.06374 22.7766 8.06374 18.5417 9.16669C13.5417 5.83335 11.25 6.45835 11.25 6.45835C10.3031 8.56591 10.2282 10.9625 11.0417 13.125C9.30719 14.9111 8.33587 17.302 8.33333 19.7917C8.33333 29.375 13.9583 31.6667 19.7917 32.2917C18.5417 33.5417 18.5417 34.7917 18.75 36.4584V43.75M18.75 39.5834C9.79167 42.5 9.79167 34.375 6.25 33.3334L18.75 39.5834Z"
						stroke="#100F10"
						strokeWidth="2.75"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</Grid>
	);
}

export default GitHubIcon;
