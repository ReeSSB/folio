import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span1, Span2, Span3 } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				<Span1>Hey there! I'm,</Span1> <br />
				<Span2>Shashi Bhushan.</Span2>
			</SectionTitle>
			<SectionText>
				<Span3>
					A Full Stack Web Developer.
					<br />
					<br />I have keen interest in Creating, Designing and
					Building things. <br />
					🏢 Open for full-time Work Opportunity.
					<br />
					⚒️ Open for collaboration and side projects.
				</Span3>
			</SectionText>
			<Button
				onClick={() =>
					(window.location =
						"https://www.linkedin.com/in/srshashibhushannbhardwaj/.com")
				}
			>
				Know More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
