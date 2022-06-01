import React from "react";
import {
	DiFirebase,
	DiReact,
	DiZend,
	DiHtml5,
	DiJavascript1,
	DiCss3Full,
	DiNodejsSmall,
	DiMongodb,
	DiMysql,
	DiGithubBadge,
} from "react-icons/di";
import { SiPostman, SiNetlify, SiGithub, SiAmazonaws, SiHeroku } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListIcon } from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<br />
		<SectionDivider />
		<br />
		<br />
		<br />

		<SectionTitle> Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technolgies in the web development world. Ranging from
			Front-end to backend including databases.
		</SectionText>
		<List>
			<ListItem>
				<ListIcon>
					<DiReact size="3rem" />
					<DiHtml5 size="2.6rem" />
					<DiJavascript1 size="3rem" />
					<DiCss3Full size="2.69rem" />
				</ListIcon>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						React.js, Next.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListIcon>
					<DiFirebase size="3rem" />
					<DiNodejsSmall size="2.8rem" />
					<DiMongodb size="2.8rem" />
					<DiMysql size="2.8rem" />
				</ListIcon>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						Node.js & Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListIcon>
					<SiNetlify size="2.1rem" />
					<SiPostman size="2.1rem" />
					<SiGithub size="2.1rem" />
					<SiAmazonaws size="2.4rem" />
					<SiHeroku size="2.1rem" />
				</ListIcon>
				<ListContainer>
					<ListTitle>Others</ListTitle>
					<ListParagraph>
						Experience with tools like
						<br />
						AWS, Postman, Netlify, GitHub & Git, Heroku & others.
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
