import React from "react";
import "./Footer.css"

const Footer = () => {
	return (
		<div className="footer">
			<ul>
				<li>
					<a href="https://www.facebook.com"><img src="/images/logos/facebook.png" className="logoRs"/></a> 
				</li>
				<li>
					<a href="https://www.twitter.com"><img src="/images/logos/twitter.png" className="logoRs"/></a> 
				</li>
				<li>
					<a href="https://www.youtube.com"><img src="/images/logos/youtube.png" className="logoRs"/></a> 
				</li>
				<li>
					<a href="https://www.soundcloud.com"><img src="/images/logos/soundcloud.png" className="logoRs"/></a> 
				</li>
			</ul>
			<div className="credits">
				<p><a href="mailto:bandankh51@gmail.com">Nous contacter</a></p>
				<p>Band'Ankh @ 2020</p>
				<p>Site réalisé par Brolyus</p>
			</div>
		</div>
	)

};

export default Footer;
