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
				<Route exact path='/' component={Gallery} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/image/:id' component={ImageMax} />
			</Switch>
		</>
	);
}

export default App;
