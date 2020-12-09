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
import Podcast from '../../img/Subtract1.png';

import Transparentes from '../../img/somos-transparentes.svg';
import Transparentessvg from '../../img/transparentes.svg';

import Mask1 from '../../img/mask-group1.png';
import Mask2 from '../../img/mask-group2.png';
import Mask3 from '../../img/mask-group3.png';
import Mask4 from '../../img/mask-group4.png';

import Nosotros from '../../img/quienes-somos.png';
import Fundacion from '../../img/fundacion.svg';

import Yellow1 from '../../img/rectangle187.png';

import Logo from '../../img/logo.svg';

const Homepage = () => {
	return(
		<div>

					<div className="bordi" >

						<Image src={Logo} alt="blocks" className="trans mb-1 mb-md-2" />

						<h3 className="mt-2"> PROYECTO </h3>
						<h3 className="mt-2"> TALLER </h3>
						<h3 className="mt-2"> COLABORA </h3>
							
					</div>

					<div>
						<h2 className="section">
							Somos personas unidas por un proyecto social que responde a la falta 
							de vínculos entre personas con y sin hogar mediante  talleres 
							colaborativos.
						</h2>

					</div>

					<div>
						<h3 className="descubre-btn mb-4">Descubre más</h3> 
					</div>

					<div>
						<Image src={Blocks} alt="blocks" fluid/>
					</div>

					<div className="section3">
						<h2>El proyecto Transformarte</h2>

							<Col lg={{ span: 6}} className="">
								<Image src={Venimos} alt="manos" fluid/>
								<h3>¿De dónde venimos?</h3>
								<p>La iniciativa nace a través de metodologías diseñadas para la creación y desarrollo de emprendimientos y <span>proyectos de impacto social</span>.</p>
							</Col>
							<Col lg={{ span: 6}} className="">
							
								<Image src={Vamos} alt="vamos" fluid/>
								<h3>¿A dónde vamos?</h3>
								<p>Nuestro objetivo es <span>proporcionar una formación y ocupación a las personas sin hogar</span> a la vez que  proponemos al público general una actividad donde aprendan y se sensibilicen sobre este colectivo.</p>
								<Button variant="dark" className="section3-btn" fluid>DESCUBRE EL TALLER</Button>

							</Col>



							<h2>¿Qué nos ha llevado hasta aquí?</h2>

							<Image src={Llevados} alt="llevados" fluid/>
							<Button variant="dark" className="section4-btn">COMPARTE Y VISIBILIZA</Button>

							{/*<hr className="b-line"></hr>*/}

					</div>

					<div className="section6">
							<h2>Nuestra finalidad no es lucrativa</h2>
							
							<Image src={Transparentes} className="section6-image" alt="transparentes" fluid/>

								<Image src={Transparentessvg} className="section6-somos-svg" alt="logo" fluid/>
									{/*==== HAS TO APPEAR ON MOBILE VERSION, NOT WORKING====*/}
									<h2>Somos Transparentes</h2>
									<p>Cuentas claras e ingresos justificados. Compruéba que todas las cifras cuadran
									   descargando el documento del balance anual.</p>
									<div className="section6-button">
										<Button variant="dark" className="s6-btn">¿DÓNDE VA TU DINERO?</Button>
									</div>

					</div>

					<section className="section7">								
							<h2>¿Quiénes estamos detrás?</h2>
														
							<div>
								<Image src={Nosotros} alt="transparentes" fluid />
								<Image src={Fundacion} alt="transparentes" className="fundacion" fluid/>
							</div>
					</section>	


					<section className="section8">
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
						</section>


		</div>
	);
}

export default Homepage;