import React from 'react';
/*import Blocks from '../../img/block-1-juntos.png';*/
import Blocks from '../../img/block1empty.svg';
import './Homepage.css';
import '../../index.css';
import Button from 'react-bootstrap/Button';
import Venimos from '../../img/block-2-venimos.png';
import Vamos from '../../img/block-2-vamos.png';
import Llevados from '../../img/text-block-3-llevado.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Garrido from '../../img/ezequiel-garrido.png';
import Podcast from '../../img/Subtract2.png';

import Transparentesmob from '../../img/transparentes.png';
import Transparentessvg from '../../img/somos-transparentes3.png';

import Mask1 from '../../img/mask1.png';
import Mask2 from '../../img/mask2.png';
import Mask3 from '../../img/mask5.png';
import Mask4 from '../../img/mask6.png';

import Fundacion1 from '../../img/fundacionmon3.png';
import Fundacion2 from '../../img/fundacionmob4.png';

import Logo from '../../img/logo-mobile.png';

import Nosotros from '../../img/quienes-somos.png';
import Fundacion from '../../img/fundacion.svg';

import Yellow1 from '../../img/mission.png';
import Yellow2 from '../../img/vision.png';
import Yellow3 from '../../img/values.png';

const Homepage = () => {
	return(
		
		/*	<Container fluid>
				<Row>
					<Col md={{ span: 11}} className="">*/

					<div className="Homepage ml-2">

						<Image src={Logo} className="mobile-logo mt-4" alt="mobile-logo"/>

						<div className="section">
							<h1>
							Somos <span className="yellow-underline">personas unidas</span> por un <span className="yellow-underline">proyecto social</span> que responde a la falta de vínculos entre personas con y sin hogar mediante <span className="yellow-box">talleres colaborativos.</span>
							</h1>
						</div>

						<div>

						{/*	<h2 className="descubre-btn">Descubre más</h2> */}

							<h2 className="descubre-btn mb-4">Descubre más  ⇣ </h2> 
							

						</div>

						<section className="section2">
							<div className="section2-container">
								<Image src={Blocks} alt="blocks" fluid />
								<div className="image-text">
									<h2>Juntos somos <span className="section2-h1">Transformarte</span> y tú también puedes serlo.</h2>
								</div>
							</div>

							
						{/*<div>
							<Image src={Blocks} alt="blocks" fluid/>
						</div>*/}
						</section>
						

						<section className="section3">
						<h2>El proyecto Transformarte</h2>

						<Row className="mb-5">
							<Col xs={12} md={6} className="">
								<div>
									<Image src={Venimos} alt="manos" fluid/>
									<h3>¿De dónde venimos?</h3>
									<p>La iniciativa nace a través de metodologías diseñadas para la creación y desarrollo de emprendimientos y <span>proyectos de impacto social</span>.</p>
								</div>
							</Col>
							<Col xs={12} md={5} className="">
							
								<Image src={Vamos} alt="vamos" fluid/>
								<h3>¿A dónde vamos?</h3>
								<p>Nuestro objetivo es <span>proporcionar una formación y ocupación a las personas sin hogar</span> a la vez que  proponemos al público general una actividad donde aprendan y se sensibilicen sobre este colectivo.</p>
								<Button variant="dark" className="section3-btn" fluid>DESCUBRE EL TALLER</Button>

							</Col>
						</Row>
						</section>

							<h2>¿Qué nos ha llevado hasta aquí?</h2>
							<div>
							<Image src={Llevados} alt="llevados" fluid/>
							<Button variant="dark" className="section4-btn">COMPARTE Y VISIBILIZA</Button>
							</div>
							{/*<hr className="b-line"></hr>*/}
											
						<section className="section5">
							<h2>¿Qué proponemos?</h2>

							<Row className="mb-5">
								<Col md={{ span: 6}} lg={{order: 'first'}}>
									<p className="section5-p"><span>El taller Upcycling Lab</span> es un espacio de colaboración en el que personas sin y con hogar pueden trabajar juntos para dar una nueva vida a objetos desechados.</p>
									<Image src={Podcast} alt="subtract" className="podcast-green mb-3" />
								</Col>
{/*===== ORDER FIRST AFFECT BOTH DESKTOP NOT ONLY MOB*/}
								<Col md={{ span: 6}} xs={{ order: 'first' }} >
								
									<Image src={Garrido} alt="ezequiel-garrido" className="img-ezequiel" fluid />
	{/*====BUTTON NEEDS TO BE HIDDEN ON MOBILE VERSION*/}
									<Button variant="dark" className="section5-btn">DESCUBRE EL TALLER</Button>

								</Col>
							</Row>
						</section>

						<section className="section6">
							<h2>Nuestra finalidad no es lucrativa</h2>
							<div className="somos-transparentes">

								<div className="centered">
								<Image src={Transparentessvg} className="section6-somos-svg" alt="logo" fluid/>
				{/*==== HAS TO APPEAR ON MOBILE VERSION, NOT WORKING====*/}
								<Image src={Transparentesmob} className="section6-img-mob" alt="logo" fluid/>
								<p className="section6-p-mob">Cuentas claras e ingresos justificados. Compruéba que todas las cifras cuadran descargando el documento del balance anual.</p>
									<div className="section6-button">
										<Button variant="dark" className="s6-btn">¿DÓNDE VA TU DINERO?</Button>
									</div>
								</div>
							</div>
						</section>

						<section className="section7">								
							<h2>¿Quiénes estamos detrás?</h2>

						
							<Container fluid className="section7-grid-mob">
								<Row className="">
									<Col md={{ span: 6}} className="">
										<Image src={Mask1} alt="mask1" fluid className="mask1"/>
									</Col>
									<Col md={{ span: 6}} className="">
										<Image src={Mask3} alt="mask3" fluid className="mask3"/>
									</Col>
								</Row>
								
								<Row className="mb-5">
									<Col md={{ span: 6}} className="">
										<Image src={Mask4} alt="mask4" fluid className="mask4"/>
									</Col>
									<Col md={{ span: 6}} xs={{ order: 'first' }} className="">
										<Image src={Mask2} alt="mask2" fluid className="mask2"/>
									</Col>
							</Row>
							<Row className="mb-5">
									<Col md={{ span: 6}} className="">
										<Image src={Fundacion1} alt="mask4" fluid className=""/>
										<Image src={Fundacion2} alt="mask4" fluid className=""/>

									</Col>
									
							</Row>
						</Container>
					
					
						
						{/*}
							<div className="section7-grid-desktop">
								<Image src={Nosotros} alt="transparentes" fluid />
								<Image src={Fundacion} alt="transparentes" className="fundacion" fluid/>
							</div>*/}
						</section>	
					

							<section>
							<div className="section7-grid-desktop">
								<Image src={Nosotros} className="mb-2" alt="transparentes" fluid />
								<Image src={Fundacion} alt="transparentes" className="fundacion mb-3" fluid/>
							</div>
						</section>	


						<section className="section8">
							<h2>Nuestro manifiesto</h2>
							<hr className="b-line"/>
							<div className="manif-flex">
								<div className="manif-unite">
									<Image src={Yellow1} className="section8-img" alt="mision" fluid/>
									{/*<div className="centrado">
										<p>MISIÓN</p>
									</div>*/}
								</div>
								<div>
									<h2>Sensibilizar</h2>
								</div>
							</div>
							<hr className="b-line"/>
							<div className="manif-flex">
								<div className="manif-unite">
									<Image src={Yellow2} className="section8-img" alt="vision" fluid/>
									{/*<div className="centrado">
										<p>VISIÓN</p>
									</div>*/}
								</div>
								<div>
									<h2>Transformar</h2>
								</div>
							</div>
							<hr className="b-line"/>
							<div className="manif-flex">
								<div className="manif-unite">
									
									<Image src={Yellow3} className="section8-img" alt="mision"/>
									{/*<div className="centrado2">
										<p>VALORES</p>
									</div>*/}
								</div>
								<h2>Sostenibilidad, impacto social y economía creativa</h2>
							</div>
							<hr className="b-line"/>
						</section>

					{/*}
						<section className="section8">
							<h2>Nuestro manifiesto</h2>
						<hr className="b-line"/>
							<div className="manif-flex">
								<div className="manif-unite">

								<Row>
									<Col md={{ span: 2}} className="mt-3 mr-2">
										<Image src={Yellow1} alt="mision"/>
									</Col>
									<Col>
										<h1 className="manifesto">Sensibilizar</h1>
									</Col>
								</Row>

								</div>
							</div>
							<hr className="b-line"/>
							<div className="manif-flex">
								<div className="manif-unite">
									<Row>
										<Col md={{ span: 2}} className="mt-3 mr-2">
											<Image src={Yellow2} alt="mision"/>
										</Col>
										<Col>
											<h1 className="manifesto">Transformar</h1>
										</Col>
									</Row>
								</div>
							</div>
							<hr className="b-line"/>

							<div className="manif-flex">
								<div className="manif-unite">
									<Row>
										<Col md={{ span: 2}} className="mt-3 mr-2">
											<Image src={Yellow3} alt="mision"/>
										</Col>
										<Col>
											<h1 className="manifesto">
												Sostenibilidad, impacto social y economía creativa</h1>
										</Col>
									</Row>

								</div>
							</div>
							<hr className="b-line"/>
						</section>*/}

					</div>



					
	);
}

export default Homepage;