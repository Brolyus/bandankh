import React from "react";
import "./Footer.css"

const Footer = () => {
	return (
		<div className="footer">
			<ul>
				<li>
					<a href="https://fr-fr.facebook.com/banddankh/"><img src="/images/logos/facebook.png" className="logoRs" alt="logo facebook"/></a> 
				</li>
				<li>
					<a href="https://www.twitter.com"><img src="/images/logos/twitter.png" className="logoRs" alt="logo twitter"/></a> 
				</li>
				<li>
					<a href="https://www.youtube.com"><img src="/images/logos/youtube.png" className="logoRs" alt="logo youtube"/></a> 
				</li>
				<li>
					<a href="https://www.soundcloud.com"><img src="/images/logos/soundcloud.png" className="logoRs" alt="logo SoundCloud"/></a> 
				</li>
			</ul>
			<div className="credits">
				<p><a href="mailto:bandankh51@gmail.com">Nous contacter</a></p>
				<p>Band'Ankh @ 2020</p>
				<p><a href="https://github.com/Brolyus">Site réalisé par Brolyus</a></p>
			</div>
		</div>
	)

};

export default Footer;
