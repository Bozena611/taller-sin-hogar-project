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

							<h2>¿Qué nos ha llevado hasta aquí?</h2>

							<Image src={Llevados} alt="llevados" fluid/>
							<Button variant="dark" className="section4-btn">COMPARTE Y VISIBILIZA</Button>

							<hr className="b-line"></hr>
											

							<h2>¿Qué proponemos?</h2>

							<Row className="mb-5">
								<Col md={{ span: 6}} >

								<Image src={Podcast} alt="subtract" />
								<p><span>El taller Upcycling Lab</span> es un espacio de colaboración en el que personas sin y con hogar pueden trabajar juntos para dar una nueva vida a objetos desechados.</p>

								</Col>
								<Col md={{ span: 6}} >
								
								<Image src={Garrido} alt="ezequiel-garrido" className="img-ezequiel" />
								<Button variant="dark" className="section5-btn">DESCUBRE EL TALLER</Button>

								</Col>
							</Row>


							<h2>Nuestra finalidad no es lucrativa</h2>
							<div className="somos-transparentes">
							<Image src={Transparentes} alt="transparentes" fluid/>
								<div className="centered">
								<Image src={Transparentessvg} alt="logo" fluid/>
									<p>Cuentas claras e ingresos justificados. Compruéba que todas las cifras cuadran descargando el documento del balance anual.</p>
									<div className="section6-button">
										<Button variant="dark" className="s6-btn">¿DÓNDE VA TU DINERO?</Button>
									</div>
								</div>
							</div>
														
							<h2>¿Quiénes estamos detrás?</h2>
							<div>
								<Image src={Nosotros} alt="transparentes" fluid />
								<Image src={Fundacion} alt="transparentes" className="fundacion" fluid/>
							</div>
											
							<h2>Nuestro manifiesto</h2>
							<hr className="b-line"/>
							<div className="manif-flex">
								<div className="manif-unite">
									<Image src={Yellow1} alt="mision" fluid/>
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
									<Image src={Yellow1} alt="vision" fluid/>
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
									<Image src={Yellow1} alt="valores" className="valores" fluid/>
									<div className="centrado">
										<p>VALORES</p>
									</div>
								</div>
								<h1>Sostenibilidad, impacto social y economía creativa</h1>
							</div>
							<hr className="b-line"/>

					</Col>
					<Col md={{ span: 1 }}>
						
					</Col>
				</Row>

		</div>
	);
}

export default Homepage;