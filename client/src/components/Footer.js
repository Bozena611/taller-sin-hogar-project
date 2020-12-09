import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../img/horizontal-logo.svg';
import Container from 'react-bootstrap/Container'

const Footer = () => {
	return (
		<div className="footer-main">

				<Row className="blacko">
					<Col md={{ span: 3 }} className="py-1 ml-2">
						<h4 className="footer-title">Y tú, ¿qué puedes hacer?</h4>

						<hr className="hrz-line"/>
				
					</Col>
					<Col md={{ span: 8}} className="py-5">
						<Button className="btn px-5 ml-5 btn btn-outline-light btn-lg descubre">COLABORA EN EL TALLER</Button>
						<Button className="btn px-5 ml-2 btn-outline-light btn-lg compartir">COMPARTIR Y VISIBILIZAR</Button>

						<hr className="hrz-line1"/>
						
					</Col>
				</Row>

			<Row className="blacko">
				<Col md={{ span: 3 }} className="ml-2">
					<h4 className="transforma">
						<img src={Logo} alt="blocks" className=" mb-3"></img>
					</h4>
					<p className="copyright">Copyright © 2020. LogoIpsum. All rights reserved.</p>
				</Col>
				<Col md={{ span: 8}} className="footer-flex1">

					<div className="footer-upcycling">
						<p>Home</p>
						<h6 className="minifoot"> El equipo</h6>
						<h6 className="minifoot"> Los valores </h6>
						<h6 className="minifoot"> Transparencia </h6>
					</div>

					<div className="footer-upcycling">
						<p> Upcycling Lab </p>
						<h6 className="minifoot"> Desarollo </h6>
						<h6 className="minifoot"> Precio </h6>
						<h6 className="minifoot"> Testimonios </h6>
						<h6 className="minifoot"> Vinculos </h6>
					</div>

					<div className="footer-upcycling">
						<p> Compra </p>
						<h6 className="minifoot"> Datos personales </h6>
						<h6 className="minifoot"> Pagos </h6>
						<h6 className="minifoot"> Info adicional </h6>
					</div>

				</Col>
			</Row>

			<div className="footer-upcycling">
						<p> Síguenos </p>
						
							<p>icon1</p>
							<p>icon2</p>
							<p>icon3</p>
						
					</div>

		</div>
	);
}
export default Footer;

