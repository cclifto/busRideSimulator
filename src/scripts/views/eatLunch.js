import React from "react"
import Header from "./header"
import ThirdFooter from './thirdFooter'

var EatLunch = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">
					<p>>>Welcome to Bus Ride Simulator. Press "Start" to begin your public transit adventure.</p>
					<p>>>You are riding the bus in your town. It's a prime example of public transit. It's cheap, affordable and, get this, good for the environment! Good on you, buddy!</p>
					<p>>>So... like... what do you wanna do?</p>
					<p>>>Alright, pastrami and cream cheese! Time to chow dow- Ah crap. The bus hit a pot hole. Now you have pastrami all over you.</p>
				</div>
				<ThirdFooter />
			</div>
		)
	}
})

export default EatLunch