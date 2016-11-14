import React from "react"
import Header from "./header"
import GameOver from './gameOver'

var TurnAway = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">
					<p>>>Welcome to Bus Simulator. Press "Start" to begin your public transit adventure.</p>
					<p>>>You are riding the bus in your town. It's a prime example of public transit. It's cheap, affordable and, get this, good for the environment! Good on you, buddy!</p>
					<p>>>So... like... what do you wanna do?</p>
					<p>>>You turn to the person sitting next to you and initiate a conversation. They have a smile on their face and are very welcoming. After a few minutes, the conversation really picks up and becomes personal. The connection is obvious. The connection is real. You begin to think you could have a future with this person. But their breath stinks.</p>
					<p>>>You turn back to the window and watch the traffic go by. You arrive at your stop and go to work. Thank you for using public transit.</p>
				</div>
				<GameOver />
			</div>
		)
	}
})

export default TurnAway