import './Contact.css';
import TwitterLogo from '../assets/twitter.svg';
import GithubLogo from '../assets/github.svg';
import FrenchFlag from '../assets/france.svg';
import ItalianFlag from '../assets/italy.svg';
import UkFlag from '../assets/united-kingdom.svg';

const Contact = () => {
	return (
		<div className='contact-container'>
			<h1 className='contact-header'>
				Contact me at:{' '}
				<a href='mailto:dominique.bello@outlook.fr'>
					dominique.bello@outlook.fr
				</a>
			</h1>
			<h1>Find me also on:</h1>
			<img src={TwitterLogo} alt='Twitter logo' height='48' width='48' />
			<a href='https://twitter.com/dominique_bello'>@dominique_bello</a>{' '}
			<h1>and</h1>
			<img src={GithubLogo} alt='Github logo' height='48' width='48' />
			<a href='https://github.com/Catevika'>Catevika</a>
			<p>
				I speak:
				<img
					src={FrenchFlag}
					alt='French flag'
					height='48'
					width='48'
				/> French <img src={UkFlag} alt='French flag' height='48' width='48' />{' '}
				English and{' '}
				<img src={ItalianFlag} alt='French flag' height='48' width='48' />
				Italian
			</p>
			<p>Awaiting to hear from you soon!</p>
			<footer>
				Icons made by{' '}
				<a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
					Freepik
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</a>
			</footer>
		</div>
	);
};

export default Contact;
