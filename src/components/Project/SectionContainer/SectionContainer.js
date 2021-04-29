import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Section from "../Section/Section";

const useStyles = makeStyles((theme) => ({
	section_container: {
		width: "100%",
	},
}));

function SectionContainer(props) {
	const classes = useStyles();
	return (
		<Box
			className={classes.section_container}
			alignItems="center"
			display="flex"
			style={{ marginLeft: "160px", marginTop: "-25px" }}
		>
			<Box p={1}>
				<Section name="Todos"></Section>
			</Box>
			<Box p={1}>
				<Section name="API"></Section>
			</Box>
			<Box p={1}>
				<Section name="Diseño"></Section>
			</Box>
			<Box p={1}>
				<Section name="React"></Section>
			</Box>
		</Box>
	);
}

export default SectionContainer;
