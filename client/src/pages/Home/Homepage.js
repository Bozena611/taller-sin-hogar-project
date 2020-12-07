import React from 'react';
import Blocks from '../../img/block-1-juntos.svg';
import './Homepage.css';
import '../../index.css';
import Button from 'react-bootstrap/Button';
import Venimos from '../../img/block-2-venimos.png';
import Vamos from '../../img/block-2-vamos.png';
import Llevados from '../../img/text-block-3-llevado.svg';
import Section5 from './Section5';
import Section6 from './Section6';


const Homepage = () => {
	return(
		<div className="Homepage">
		
			<section className="section1">
				<div className="som">
					<h1 className="somos">
						Somos personas unidas por un proyecto social que responde a la falta 
						de vínculos entre personas con y sin hogar mediante  talleres 
						colaborativos.
					</h1>
				</div>
			</section>
			
			<div>
				<h2 className="descubre-btn">Descubre más</h2> 
			</div>
			
			<section className="section2">
				<div className="section2-container">
					<img src={Blocks} alt="blocks"></img>
					<div className="image-text">
						<h2>Juntos somos <span className="section2-h1">Transformarte</span> y tú también puedes serlo.</h2>
					</div>
				</div>
			</section>

			<section className="section3">
				<h2>El proyecto Transformarte</h2>
				<div className="section3-container">
					<div className="section3-div1">
						<img src={Venimos} alt="manos"></img>
						<h3>¿De dónde venimos?</h3>
						<p>La iniciativa nace a través de metodologías diseñadas para la creación y desarrollo de emprendimientos y <span>proyectos de impacto social</span>.</p>
					</div>
					<div className="section3-div2">
						<img src={Vamos} alt="vamos"></img>
						<h3>¿A dónde vamos?</h3>
						<p>Nuestro objetivo es <span>proporcionar una formación y ocupación a las personas sin hogar</span> a la vez que  proponemos al público general una actividad donde aprendan y se sensibilicen sobre este colectivo.</p>
						<Button variant="dark" className="section3-btn">DESCUBRE EL TALLER</Button>
					</div>
				</div>
			</section>
							
			<section className="section4">
				<h2>¿Qué nos ha llevado hasta aquí?</h2>
				<div className="section4-container">
					<img src={Llevados} alt="llevados"></img>
					<Button variant="dark" className="section4-btn">COMPARTE Y VISIBILIZA</Button>
				</div>
			</section>
			
			<Section5 className="section5" />
											
			<Section6 />
				
		
			
			<section className="section7">
				<h4>
					¿Quiénes estamos detrás?
				</h4>
			</section>

			<section className="section8">
				<h4>
					Nuestro manifiesto
				</h4>
				<hr className="b-line"/>
				<h4>
					Sensibilizar
				</h4>
				<hr className="b-line"/>
				<h4>
					Transformar
				</h4>
				<hr className="b-line"/>
				<h4>
					Sostenibilidad, impacto social y economía creativa
				</h4>
				<hr className="b-line"/>
			</section>
			
		</div>
	);
}

export default Homepage;