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

			<Row>
				<Col md={{ span: 3 }} className="ml-2">
					<h4 className="transforma">TRANSFORMARTE</h4>
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

					<div>
						<p className="footer-siguenos">Síguenos</p>
						<div className="footer-flex2">
							<p>icon1</p>
							<p>icon2</p>
							<p>icon3</p>
						</div>
					</div>

				</Col>
			</Row>

		</div>
	);
}
export default Footer;

