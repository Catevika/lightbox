import './About.css';
import CatevikaLogo from '../assets/logo.png';

const About = () => {
	return (
		<div className='about-container'>
			<img className='about-logo' src={CatevikaLogo} alt='logo' />
			<div className='about-card-container'>
				<div className='about-card'>
					<p className='about-text'>
						Hello, I am <span className='about-text-span'>Dominique Bello</span>{' '}
						aka{' '}
						<a href='https://github.com/Catevika' className='about-text-link'>
							Catevika
						</a>
						!
					</p>
					<p className='about-text'>
						I am a French{' '}
						<span className='about-text-span'>Front-End Web developer</span>, a
						coding woman entering the tech world after 20 years in Marketing as
						a Project Manager. I am living near Paris, France with my Italian
						husband
					</p>
				</div>
				<div className='about-card'>
					<p className='about-text'>
						Some of the OS, Languages, Frameworks and Tools I use:
					</p>
					<ul className='about-ul'>
						<li className='about-li'>Windows 10</li>
						<li className='about-li'>Visual Studio Code + extensions,</li>
						<li className='about-li'>HTML5, CSS3, Sass</li>
						<li className='about-li'>Javascript, React, Node</li>
						<li className='about-li'>Express, Redux, MongoDB</li>
						<li className='about-li'>Git, Github, NPM...</li>
					</ul>
				</div>
				<div className='about-card'>
					<p className='about-text'>
						Out of work, I love street art festivals, fantasy and steampunk
						arts, circus arts, digital photo and retouching
					</p>
					<p className='about-text'>Italy is my adopted country!</p>
				</div>
			</div>
		</div>
	);
};

export default About;
