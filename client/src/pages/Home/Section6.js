import React from 'react';
import './Section6.css';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Transparentes from '../../img/somos-transparentes2.svg';

const Section6 = () => {
	return(
		<div className="section6">
			<h4>Nuestra finalidad no es lucrativa</h4>
			<div className="somos-transparentes">
			  <img src={Transparentes} alt="transparentes"></img>
			  <p>Cuentas claras e ingresos justificados. Compruéba que todas las cifras cuadran descargando el documento del balance anual.</p>
			  <p>
			    <Button variant="primary">¿DÓNDE VA TU DINERO?</Button>
			  </p>
			</div>
		</div>
		)
}

export default Section6;

