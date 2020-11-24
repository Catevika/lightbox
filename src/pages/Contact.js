import './Contact.css';
import MailIcon from '../assets/mail.svg';
import TwitterLogo from '../assets/twitter.svg';
import GithubLogo from '../assets/github.svg';
import FrenchFlag from '../assets/france.svg';
import ItalianFlag from '../assets/italy.svg';
import UkFlag from '../assets/united-kingdom.svg';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-container'>
				<div className='contact-main-container'>
					<p className='contact-main-text'>
						Looking for user friendly, functional and scalable apps / sites?
					</p>
					<p className='contact-main-text'>Let's start collaborating!</p>
				</div>
				<div className='contact-main-card'>
					<a className='contact-link' href='mailto:dominique.bello@outlook.fr'>
						<img
							className='contact-icon'
							src={MailIcon}
							alt='Mail icon'
							height='72'
							width='72'
						/>
					</a>
					<a
						className='contact-link'
						href='https://twitter.com/dominique_bello'
					>
						<img
							className='contact-icon'
							src={TwitterLogo}
							alt='Twitter logo'
							height='72'
							width='72'
						/>
					</a>
					<a className='contact-link' href='https://github.com/Catevika'>
						<img
							className='contact-icon'
							src={GithubLogo}
							alt='Github logo'
							height='72'
							width='72'
						/>
					</a>
				</div>
				<div className='contact-card'>
					<p className='contact-text flags'>I speak: </p>
					<div className='contact-flags-container'>
						<div className='contact-block'>
							<img
								className='contact-icon'
								src={FrenchFlag}
								alt='French flag'
								height='32'
								width='32'
							/>
							<p className='contact-text'>French</p>
						</div>
						<div className='contact-block'>
							<img
								className='contact-icon'
								src={UkFlag}
								alt='French flag'
								height='32'
								width='32'
							/>
							<p className='contact-text'>English</p>
						</div>
						<div className='contact-block'>
							<img
								className='contact-icon'
								src={ItalianFlag}
								alt='French flag'
								height='32'
								width='32'
							/>
							<p className='contact-text'>Italian</p>
						</div>
					</div>
				</div>
				<div className='contact-main-container-footer'>
					<p className='contact-main-text'>Awaiting to hear from you soon!</p>
				</div>
			</div>
			<footer className='contact-footer'>
				<em className='contact-text'>
					Icons made by
					<a
						className='contact-link'
						href='https://www.flaticon.com/authors/freepik'
						title='Freepik'
					>
						Freepik
					</a>{' '}
					from{' '}
					<a className='contact-link' href='http://www.onlinewebfonts.com'>
						oNline Web Fonts
					</a>
					<a
						className='contact-link'
						href='https://www.flaticon.com/'
						title='Flaticon'
					>
						www.flaticon.com
					</a>
				</em>
			</footer>
		</div>
	);
};

export default Contact;
