import React from 'react'
import Navbar from './Navbar'
import flagsmithHOC from './FlagsmithHOC'

function App() {
	const NavbarFeature = flagsmithHOC(Navbar, 'navbar')

	return (
		<div>
			<NavbarFeature />
		</div>
	)
}

export default App
