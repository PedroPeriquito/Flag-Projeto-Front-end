// Import necessary dependencies and components from React and other modules
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Booking from './Pages/Booking/Booking';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from './Components/ChangeMode/ChangeMode';


export default function App() {
	// Access theme and toggleTheme function from ThemeContext using useContext hook
	const { theme, toggleTheme } = useContext(ThemeContext);

	// Return the JSX for the App component
	return (
		<div className={`App ${theme === 'canyon' ? 'canyon-theme' : theme === 'desert' ? 'desert-theme' : theme === 'snow' ? 'snow-theme' : 'forest-theme'}`}>
			<Navbar toggleTheme={toggleTheme} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destinations' element={<Destinations />} />
				<Route path='/booking' element={<Booking />} />
				<Route path='/contactUs' element={<Contacts />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}
