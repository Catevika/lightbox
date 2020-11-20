import { Switch, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ImageMax from './components/ImageMax';
import './App.css';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={Gallery} />
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/about`}
					component={About}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/contact`}
					component={Contact}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/image/:id`}
					component={ImageMax}
				/>
			</Switch>
		</>
	);
}

export default App;
