import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<header className='navbar'>
			<ul className='navbar-ul'>
				<li>
					<NavLink
						exact
						activeClassName='current'
						to='/'
						className='navbar-link'
					>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						activeClassName='current'
						to='/about'
						className='navbar-link'
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						activeClassName='current'
						to='/contact'
						className='navbar-link'
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
