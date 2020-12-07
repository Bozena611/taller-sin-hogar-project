import React from 'react';
import './Section7.css';
import Nosotros from '../../img/quienes-somos.png';
import Fundacion from '../../img/fundacion.svg';

const Section7 = () => {
	return(
		<div className="section7">
			<h2>¿Quiénes estamos detrás?</h2>
			<div>
				<img src={Nosotros} alt="transparentes"></img>
				<img src={Fundacion} alt="transparentes" className="fundacion"></img>
			</div>
		</div>
		)
}

export default Section7;