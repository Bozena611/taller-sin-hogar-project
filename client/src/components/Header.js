import React from 'react';
import './Header.css';
import Logo from '../img/logo.svg';

const Header = () => {
	return(
		<div className="header-main mt-5 ml-5">

			<img src={Logo} alt="blocks" className="trans mb-3"></img>

			<h3 className="mt-2"> PROYECTO </h3>
			<h3 className="mt-2"> TALLER </h3>
			<h3 className="header-box" mt-2> COLABORA </h3>
		</div>
	);
}

export default Header;