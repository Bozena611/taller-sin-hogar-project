import React from 'react';
import './Section8.css';
//import Button from 'react-bootstrap/Button';
import Yellow1 from '../../img/rectangle187.png';
//import Transparentessvg from '../../img/transparentes.svg';

const Section8 = () => {
	return(
		<div className="section8">
			<h2>Nuestro manifiesto</h2>
			<hr className="b-line"/>
			<div className="manif-flex">
				<div className="manif-unite">
					<img src={Yellow1} alt="mision"></img>
					<div className="centrado">
						<p>MISIÓN</p>
					</div>
				</div>
				<div>
					<h1>Sensibilizar</h1>
				</div>
			</div>
			<hr className="b-line"/>
			<div className="manif-flex">
				<div className="manif-unite">
					<img src={Yellow1} alt="vision"></img>
					<div className="centrado">
						<p>VISIÓN</p>
					</div>
				</div>
				<div>
					<h1>Transformar</h1>
				</div>
			</div>
			<hr className="b-line"/>
			<div className="manif-flex">
				<div className="manif-unite">
					<img src={Yellow1} alt="valores" className="valores"></img>
					<div className="centrado">
						<p>VALORES</p>
					</div>
				</div>
				<h1>Sostenibilidad, impacto social y economía creativa</h1>
			</div>
			<hr className="b-line"/>
		</div>
	)
}

export default Section8;
