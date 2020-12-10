import React from 'react';
import './Footer2.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Logo from '../img/horizontal-logo.svg';

const Footer2 = () => {
	return (
		<div className="footer-main">

			<div className="footer-buttons">
				<div>
					<div>
						<h4 className="footer-title">Y tú, ¿qué puedes hacer?</h4>
						<hr className="hrz-line"/>
					</div>
					
				</div>
				<div className="footer-buttons2">
					<div>
						<Button variant="primary">DESCUBRE EL TALLER</Button>
						{/*<button type="button" className="px-5 btn btn-outline-light btn-lg descubre">DESCUBRE EL TALLER</button> */}
					</div>
					<div>
						<Button variant="primary" className="compartir">COMPARTIR Y VISIBILIZAR</Button>
						{/*<button type="button" className="px-5 btn btn-outline-light btn-lg compartir">COMPARTIR Y VISIBILIZAR</button>  */}
					</div>
					<hr className="hrz-line"/>
				</div>
				
			</div>
			
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
				<div className="footer-compra">
						<p> Compra </p>
						<p> Datos personales </p>
						<p> Pagos </p>
						<p> Info adicional </p>
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
			<div className="transforma">
				<Image src={Logo} alt="blocks" className=" mb-3" />
			</div>
			

			<p className="copyright">Copyright © 2020. LogoIpsum. All rights reserved.</p>
		</div>
	);
}
export default Footer2;