import React from "react"
import Header from "./header"
import GameOver from './gameOver'

var Ignore = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">
					<p>>>Welcome to Bus Simulator. Press "Start" to begin your public transit adventure.</p>
					<p>>>You are riding the bus in your town. It's a prime example of public transit. It's cheap, affordable and, get this, good for the environment! Good on you, buddy!</p>
					<p>>>So... like... what do you wanna do?</p>
					<p>>>You turn to the person sitting next to you and initiate a conversation. They have a smile on their face and are very welcoming. After a few minutes, the conversation really picks up and becomes personal. The connection is obvious. The connection is real. You begin to think you could have a future with this person. But their breath stinks.</p>
					<p>>>You pop a breath mint in your mouth and offer your neighbor one (you clever commuter, you!). They gladly accept and introduce themselves as Jordan. You continue talking on your bus ride and make plans to meet after work for happy hour. Oh boy! Eventually, you get off the bus and go to work. While you are working, you get a text message.</p>
					<p>>>You keep working. Probably best to make a good impression. After all, you're still in your probationary period!</p>
					<p>>>You show up at the bar for happy hour and Jordan is no where to be found. You check your phone and see that text you got earlier was from her and she wanted to meet at her place first! Oh geez! You try calling but she doesn't pick up, so you go home, alone.</p>
				</div>
				<GameOver />
			</div>
		)
	}
})

export default Ignore