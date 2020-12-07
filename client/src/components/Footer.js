import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
	return (
		<div className="footer-main">
			<div className="footer-buttons">

				<Row>
					<Col md={{ span: 3 }} className="py-3 ml-2">
						<h4 className="footer-title">Y tú, ¿qué puedes hacer?</h4>
					</Col>
					<Col md={{ span: 8}} className="py-5">
						<Button className="btn px-5 ml-5 btn btn-outline-light btn-lg descubre">COLABORA EN EL TALLER</Button>
						<Button className="btn px-5 ml-2 btn-outline-light btn-lg compartir">COMPARTIR Y VISIBILIZAR</Button>
					</Col>
				</Row>

			</div>

			<Row>
				<Col md={{ span: 3 }} className="ml-2">
					<hr className="hrz-line"/>
				</Col>
				<Col md={{ span: 8}} >
					<hr className="hrz-line1"/>
				</Col>
			</Row>

			<div className="footer-flex1">
				<div>
					<p>Home</p>
					<p>El equipo</p>
					<p>Los valores</p>
					<p>Transparencia</p>
				</div>	
				<div className="footer-upcycling">
					<p>Upcycling Lab</p>
					<p>Desarrollo</p>
					<p>Precio</p>
					<p>Testimonios</p>
					<p>Vínculos</p>
				</div>
			</div>
			<div>
				<p className="footer-siguenos">Síguenos</p>
				<div className="footer-flex2">
					<p>icon1</p>
					<p>icon2</p>
					<p>icon3</p>
				</div>
			</div>	
			<div>
				<h5 className="transforma">TRANSFORMARTE</h5>
			</div>
			<p className="copyright">Copyright © 2020. LogoIpsum. All rights reserved.</p>
		</div>
	);
}
export default Footer;

