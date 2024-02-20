import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
} from './HeroElements';
import { Link } from 'react-router-dom';
// import {Routes, Route, useNavigate} from 'react-router-dom';

// Define a function to handle the click event
// const handleClick = () => {
// 	// Redirect the user to the desired URL
// 	window.location.href = `D:/LAB/try/Fantasy Football/src/components/Main`;
//   };
  
function Hero() {
	return (
		<HeroContainer>
			<HeroContent>
				<HeroItems>
					<HeroH1>Fantasy Football</HeroH1>
					<HeroP><Link to="/Matches">Matches</Link></HeroP>
					<HeroP><Link to="/ScoreCard">Scores</Link></HeroP>
					<HeroP><Link to="/playerinfo">Player-Info</Link></HeroP>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
