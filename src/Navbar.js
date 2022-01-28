import React from 'react'
import './Navbar.css'
import WithFlagsmith from './WithFlagsmith'

function Navbar() {
	return (
		<div className='navbar'>
			<h1 className='navbar__logo'>Hello, React!</h1>
			<ul className='navbar__nav'>
				<li className='navbar__nav item'>home</li>
				<li className='navbar__nav item'>about</li>
				<li className='navbar__nav item'>store</li>
			</ul>
		</div>
	)
}

const NavbarFeature = WithFlagsmith(Navbar, 'navbar')

export default NavbarFeature
