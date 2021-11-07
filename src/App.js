import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import PerspectiveBackground from "./components/PerspectiveBackground/PerspectiveBackground";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<PerspectiveBackground />
			<CharacterEditor />
			<Footer />
		</>
	);
}

export default App;
