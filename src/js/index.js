//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";
import fontawesome from "@fortawesome/fontawesome-free";

//include your index.scss file into the bundle
import "../styles/index.scss";
import { PropTypes } from "prop-types";

//import your own components
function Clock(props) {
	return (
		<div className="bigCounter">
			<div>
				<i className="far fa-clock" style={{ color: "white" }}></i>
			</div>
			<div className="four">{props.numberFour % 10}</div>
			<div className="three">{props.numberThree % 10}</div>
			<div className="two">{props.numberTwo % 10}</div>
			<div className="one">{props.numberOne % 10}</div>
		</div>
	);
}

Clock.propTypes = {
	numberFour: PropTypes.number,
	numberThree: PropTypes.number,
	numberTwo: PropTypes.number,
	numberOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<Clock
			numberOne={one}
			numberTwo={two}
			numberThree={three}
			numberFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
