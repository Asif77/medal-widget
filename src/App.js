import React from 'react';
import './App.css';
import MedalWidget from './components/MedalWidget';
import { MedalType } from './utils/Medaltype';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<div className="App">
			<MedalWidget sort={MedalType.GOLD} />
		</div>
	);
}

export default App;
