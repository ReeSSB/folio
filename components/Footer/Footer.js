import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<div>
				<div style={{ display: "flex", alignContent: "center" }}>
					<h1>Get In Touch !</h1>
				</div>

				<LinkList>
					<LinkColumn>
						<LinkTitle>Call (say Hello)</LinkTitle>
						<LinkItem href="tel:+91 6203387681" passHref={true}>
							+91 6203387681
						</LinkItem>
					</LinkColumn>
					<LinkColumn>
						<LinkTitle>Email Me...</LinkTitle>
						<LinkItem href="mailto:contact@shashi.as05@gmail.com" passHref={true}>
							{/* srshashibhushanbhardwaj@gmail.com */}
							shashi.as05@gmail.com
						</LinkItem>
					</LinkColumn>
				</LinkList>
				<SocialIconsContainer>
					<CompanyContainer>
						<Slogan>✌️...Keep Coding!</Slogan>
					</CompanyContainer>
					<SocialContainer>
						<SocialIcons href="https://github.com/" passHref={true}>
							<AiFillGithub size="3rem" />
						</SocialIcons>
						<SocialIcons href="https://linkedin.com/" passHref={true}>
							<AiFillLinkedin size="3rem" />
						</SocialIcons>
						<SocialIcons href="mailto:contact@shashi.as05@gmail.com" passHref={true}>
							<ImMail4 size="2.7rem" />
						</SocialIcons>
						{/* <SocialIcons href="https://instagram.com/">
						<AiFillInstagram size="3rem" />
					</SocialIcons> */}
					</SocialContainer>
				</SocialIconsContainer>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
