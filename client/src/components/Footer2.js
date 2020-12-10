import React from 'react';
import './Footer2.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Logo from '../img/horizontal-logo.svg';

import icon from '../img/Path.png';
import icon1 from '../img/Path1.png';
import icon2 from '../img/Path3.png';

const Footer2 = () => {
	return (
		<div className="footer-main">
			<div className="footer-buttons">
				<div>
					<div>
						<h4 className="footer-title">Y tú, ¿qué puedes hacer?</h4>
						<hr className="hrz-line1"/>
					</div>
					
				</div>
				<div className="footer-buttons2">
					<div>
						<Button variant="dark" className="descubre-foot">DESCUBRE EL TALLER</Button>
						{/*<button type="button" className="px-5 btn btn-outline-light btn-lg descubre">DESCUBRE EL TALLER</button>*/}
					</div>
					<div>
						<Button variant="dark" className="compartir-foot">COMPARTIR Y VISIBILIZAR</Button>
						{/*<button type="button" className="px-5 btn btn-outline-light btn-lg compartir">COMPARTIR Y VISIBILIZAR</button>*/}
					</div>
					<hr className="hrz-line"/>
				</div>
				
			</div>
			<div>
				<div className="footer-flex1">
					<div className="footer-flex3">
						<div>
							<p className="flex-title">Home</p>
							<p>El equipo</p>
							<p>Los valores</p>
							<p>Transparencia</p>
						</div>	
						<div className="footer-upcycling">
							<p className="flex-title">Upcycling Lab</p>
							<p>Desarrollo</p>
							<p>Precio</p>
							<p>Testimonios</p>
							<p>Vínculos</p>
						</div>
						<div className="footer-compra">
								<p className="flex-title"> Compra </p>
								<p> Datos personales </p>
								<p> Pagos </p>
								<p> Info adicional </p>
							</div>
					</div>
				<div className="footer-bottom">
					<p className="footer-siguenos">Síguenos</p>
					<div className="footer-flex2">
						<Image src={icon} className="mr-2"/>
						<Image src={icon1} className="mr-2" />
						<Image src={icon2} className="mr-1" />
					</div>
				</div>
			</div>	
			<div className="transforma">
				<Image src={Logo} alt="blocks" className=" mb-3" />
			
			<p className="copyright">Copyright © 2020. LogoIpsum. All rights reserved.</p>
			</div>
		</div>
		</div>
	);
}
export default Footer2;