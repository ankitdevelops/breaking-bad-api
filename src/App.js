import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";
import CharacterGrig from "./components/characters/CharacterGrig";
import Search from "./components/Search";
function App() {

	const [query, setQuery] = useState("");

	const queryFunction = (q) => {
		setQuery(q);
	};

	return (
		<div className="container">
			<Header />
			<Search getQuery={queryFunction} />
			<CharacterGrig query={query} />
		</div>
	);
}

export default App;
