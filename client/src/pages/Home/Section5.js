import React from 'react';
import './Homepage.css';
import Garrido from '../../img/ezequiel-garrido.png';
import Subtract from '../../img/Subtract.png';
import Button from 'react-bootstrap/Button';

const Section5 = () => {
	return(
		<div className="section5">
			<h3>¿Qué proponemos?</h3>
				<div className="section5-container">
					<div className="section5-grid-item1">
						<img src={Garrido} alt="ezequiel-garrido" className="img-ezequiel"></img>
					</div>
					<div className="section5-grid-item2">
						<p>El taller Upcycling Lab es un espacio de colaboración en el que personas sin y con hogar pueden trabajar juntos para dar una nueva vida a objetos desechados.</p>
					</div>
					<div className="section5-grid-item3">
						<img src={Subtract} alt="subtract"></img>
					</div>
					<div className="section5-grid-item4">
						<Button variant="dark" className="section5-btn">DESCUBRE EL TALLER</Button>
					</div>
				</div>
		</div>
		)
}

export default Section5;