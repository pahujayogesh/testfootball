// Filename - components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	Heading,
} from "./FooterElements";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<Link to="/"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Home</Link>
          				<Link to="/Matches"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Matches</Link>
          				<Link to="/ScoreCard"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Scores</Link>
          				<Link to="/Playerinfo"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Player Info</Link>
					</Column>
					<Column>
                        <Heading>Services</Heading>
                        <Link to="/"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Home</Link>
          				<Link to="/Matches"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Matches</Link>
          				<Link to="/ScoreCard"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Scores</Link>
          				<Link to="/Playerinfo"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Player Info</Link>
                    </Column>
					<Column>
						<Heading>Social Media</Heading>
          				<Link to="https://github.com/pahujayogesh"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Github</Link>
          				<Link to="https://linkedin.com/in/yogesh-pahuja-a452251b2"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">LinkedIn</Link>
          				<Link to="https://yogesh-pahuja-portfolio.vercel.app/"  className="text-white hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Portfolio</Link>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
