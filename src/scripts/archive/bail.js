import React from "react"
import Header from "./header"
import GameOver from './gameOver'

var Bail = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">	
					<p>>>Welcome to Bus Ride Simulator. Press "Start" to begin your public transit adventure.</p>
					<p>>>You are riding the bus in your town. It's a prime example of public transit. It's cheap, affordable and, get this, good for the environment! Good on you, buddy!</p>
					<p>>>So... like... what do you wanna do?</p>
					<p>>>Alright, pastrami and cream cheese! Time to chow dow- Ah crap. The bus hit a pot hole. Now you have pastrami all over you.</p>	
					<p>>>Oh god. That didn't help at ALL. You just spread it all over your shirt. You got grease and cream cheese EVERYWHERE. What the fuck are you gonna do? You gotta go to work and you're still on your probationary period!</p>
					<p>>>You get off the bus and walk home with pride, your obvious confidence building an aura around you. When you get home, you check your answering machine to hear a message from your boss telling you that you're fired.</p>
				</div>
				<GameOver />
			</div>
		)
	}
})

export default Bail

