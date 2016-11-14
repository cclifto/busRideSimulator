import React from "react"
import Header from "./header"
import GameOver from './gameOver'

var GoHome = React.createClass({	

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
					<p>>>It's from Jordan! "Hey, let's meet at my place before we go out :)" She even included her address! What a nice lady.</p>
					<p>>>You show up at Jordan's house and knock on the door. It opens slightly. You call her name out, but there is no response.</p>
					<p>>>Well, she's probably ok. It's like Schrödinger's cat. Best way to keep her alive is to avoid confirming that she's dead. You go home to drink the six-pack you have in the fridge and get ready for work tomorrow.</p>
				</div>
				<GameOver />
			</div>
		)
	}
})

export default GoHome