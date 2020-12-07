import React from 'react';
import './Section6.css';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Transparentes from '../../img/somos-transparentes.svg';
import Transparentessvg from '../../img/transparentes.svg';

const Section6 = () => {
	return(
		<div className="section6">
			<h2>Nuestra finalidad no es lucrativa</h2>
			<div className="somos-transparentes">
			  <img src={Transparentes} alt="transparentes"></img>
			  <div className="centered">
			  <img src={Transparentessvg} alt="logo"></img>
			  	<p>Cuentas claras e ingresos justificados. Compruéba que todas las cifras cuadran descargando el documento del balance anual.</p>
			    <div className="section6-button">
			    	<Button variant="dark" className="s6-btn">¿DÓNDE VA TU DINERO?</Button>
			  	</div>
			  </div>
			</div>
		</div>
		)
}

export default Section6;

