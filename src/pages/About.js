import { Link, Route } from 'react-router-dom';
import Contact from './Contact';
import './About.css';

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-card'>
				<h1 className='about-header big collaboration'>
					Looking for user friendly, functional and scalable apps / sites?
				</h1>
				<Link
					className='about-paragraph-link'
					to={`${process.env.PUBLIC_URL}/contact`}
				>
					<h1 className='about-header big collaboration'>
						Let's start our collaboration now!
					</h1>
				</Link>
			</div>
			<div className='about-card'>
				<h2 className='about-header collaboration'>
					Hello, I am <span className='about-header-span'>Dominique Bello</span>{' '}
					aka{' '}
					<a href='https://github.com/Catevika' className='about-header-link'>
						Catevika
					</a>
					!
				</h2>
				<h2 className='about-header collaboration'>
					I am a French woman, Front-End Web developer, with a 20 years
					Marketing background, living near Paris, France
				</h2>
				<hr />
				<h2 className='about-header collaboration'>
					Some of the OS, Languages, Frameworks and Tools I use:
				</h2>
				<ul className='about-ul collaboration'>
					<li className='about-li collaboration'>Windows 10</li>
					<li className='about-li collaboration'>
						Visual Studio Code + extensions,
					</li>
					<li className='about-li collaboration'>
						TML5, CSS3, Sass, Javascript, React
					</li>
					<li className='about-li collaboration'>Node,Express, MongoDB</li>
					<li className='about-li collaboration'>Git, Github, NPM</li>
					<li className='about-li collaboration'>etc.</li>
				</ul>
				<hr />
				<h2 className='about-header collaboration'>
					Out of work, I love street art festivals, fantasy and steampunk arts,
					circus arts, digital photo and retouching
				</h2>
				<h2 className='about-header collaboration'>
					Italy is my adopted country thanks to my husband
				</h2>
			</div>
			<Route
				exact
				path={`${process.env.PUBLIC_URL}/contact`}
				component={Contact}
			/>
		</div>
	);
};

export default About;
