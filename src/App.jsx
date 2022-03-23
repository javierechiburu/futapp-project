import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './scss/styles.scss';

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
		</Routes>
	);
}

export default App;
