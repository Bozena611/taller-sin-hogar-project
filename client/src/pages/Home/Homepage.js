import React from 'react';
import Blocks from '../../img/block-1-juntos.png';
import './Homepage.css';
import '../../index.css';
import Button from 'react-bootstrap/Button';
import Venimos from '../../img/block-2-venimos.png';
import Vamos from '../../img/block-2-vamos.png';
import Llevados from '../../img/text-block-3-llevado.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Garrido from '../../img/ezequiel-garrido.png';
import Podcast from '../../img/Subtract.png';

import Transparentes from '../../img/somos-transparentes.svg';
import Transparentessvg from '../../img/transparentes.svg';

import Mask1 from '../../img/mask-group1.png';
import Mask2 from '../../img/mask-group2.png';
import Mask3 from '../../img/mask-group3.png';
import Mask4 from '../../img/mask-group4.png';

import Nosotros from '../../img/quienes-somos.png';
import Fundacion from '../../img/fundacion.svg';

import Yellow1 from '../../img/rectangle187.png';

const Homepage = () => {
	return(
		<div className="Homepage">

				<Row>
					<Col md={{ span: 11}} className="">
						<h1 className="section">
							Somos personas unidas por un proyecto social que responde a la falta 
							de vínculos entre personas con y sin hogar mediante  talleres 
							colaborativos.
						</h1>

						<div>
							<h2 className="descubre-btn mb-4">Descubre más</h2> 
						</div>

						<div>
							<Image src={Blocks} alt="blocks" fluid/>
						</div>
						<section className="section3">
						<h2>El proyecto Transformarte</h2>

						<Row className="mb-5">
							<Col md={{ span: 6}} className="">
								<Image src={Venimos} alt="manos" fluid/>
								<h3>¿De dónde venimos?</h3>
								<p>La iniciativa nace a través de metodologías diseñadas para la creación y desarrollo de emprendimientos y <span>proyectos de impacto social</span>.</p>
							</Col>
							<Col md={{ span: 6}} className="">
							
								<Image src={Vamos} alt="vamos" fluid/>
								<h3>¿A dónde vamos?</h3>
								<p>Nuestro objetivo es <span>proporcionar una formación y ocupación a las personas sin hogar</span> a la vez que  proponemos al público general una actividad donde aprendan y se sensibilicen sobre este colectivo.</p>
								<Button variant="dark" className="section3-btn" fluid>DESCUBRE EL TALLER</Button>

							</Col>
						</Row>
						</section>

							<h2>¿Qué nos ha llevado hasta aquí?</h2>

							<Image src={Llevados} alt="llevados" fluid/>
							<Button variant="dark" className="section4-btn">COMPARTE Y VISIBILIZA</Button>

							{/*<hr className="b-line"></hr>*/}
											

					</Col>
					<Col md={{ span: 1 }}>
						
					</Col>
				</Row>

		</div>
	);
}

export default Homepage;