import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer-main">
			<div className="footer-buttons">
				<div>
					<h4 className="footer-title">Y tú, ¿qué puedes hacer?</h4>
				</div>
				<div>
					<button type="button" className="px-5 btn btn-outline-light btn-lg descubre">DESCUBRE EL TALLER</button>
				</div>
				<div>
					<button type="button" className="px-5 btn btn-outline-light btn-lg compartir">COMPARTIR Y VISIBILIZAR</button>
				</div>
			</div>
			<hr className="hrz-line"/>
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

