import React from "react"
import Header from "./header"
import SecondFooter from './secondFooter'

var FirstBusView = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">
					<p>>>Welcome to Bus Ride Simulator. Press "Start" to begin your public transit adventure.</p>
					<p>>>You are riding the bus in your town. It's a prime example of public transit. It's cheap, affordable and, get this, good for the environment! Good on you, buddy!</p>
					<p>>>So... like... what do you wanna do?</p>
				</div>
				<SecondFooter />
			</div>
		)
	}
})




export default FirstBusView