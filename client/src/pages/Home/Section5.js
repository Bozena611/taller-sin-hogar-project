import React from 'react';
import './Section5.css';
import Garrido from '../../img/ezequiel-garrido.png';
import Podcast from '../../img/Subtract.png';
import Button from 'react-bootstrap/Button';

const Section5 = () => {
	return(
		<div className="section5">
			
			<h2>¿Qué proponemos?</h2>
				<div className="section5-container">
					<div className="section5-grid-item1">
						<img src={Garrido} alt="ezequiel-garrido" className="img-ezequiel"></img>
					</div>
					<div className="section5-grid-item2">
						<p><span>El taller Upcycling Lab</span> es un espacio de colaboración en el que personas sin y con hogar pueden trabajar juntos para dar una nueva vida a objetos desechados.</p>
					</div>
					<div className="section5-grid-item3">
						<img src={Podcast} alt="subtract"></img>
					</div>
					<div className="section5-grid-item4">
						<Button variant="dark" className="section5-btn">DESCUBRE EL TALLER</Button>
					</div>
				</div>
		</div>
		)
}

export default Section5;