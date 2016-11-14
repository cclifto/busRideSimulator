import React from "react"

var SecondFooter = React.createClass({
	_cleanTalk: function(){
		location.hash = '#cleanTalk'
	},

	_eat: function(){
		location.hash = '#eat'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._cleanTalk}>TALK TO NEIGHBOR</button>
				<button onClick={this._eat}>EAT YOUR LUNCH</button>
			</footer>
			)
	}
})

export default SecondFooter

				// <button onClick={this._clickStart}>START</button>
