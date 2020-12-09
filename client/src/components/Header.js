import React from 'react';
import './Header.css';
import Logo from '../img/logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const Header = () => {
	return(
		<div className="header-main" >

					<Row>
						<Col className="bordi" >

						<img src={Logo} alt="blocks" className="trans mb-1 mb-md-2"></img>

						<h3 className="mt-2"> PROYECTO </h3>
						<h3 className="mt-2"> TALLER </h3>
						<h3 className="header-box"> COLABORA </h3>
							
						</Col>
					</Row>

		</div>
	);
}

export default Header;