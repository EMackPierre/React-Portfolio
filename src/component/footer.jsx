import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://codepen.io/emackpierre"
								target="_blank"
								rel="noopener noreferrer">
								<img className="img-fluid" src={codepen} alt=""/>
							</a>
							<a
								className="px-3"
								href="https://github.com/EMackPierre"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a
								href="www.linkedin.com/in/ernst-mackenzie-pierre-51b8145a"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Ernst M Pierre &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;