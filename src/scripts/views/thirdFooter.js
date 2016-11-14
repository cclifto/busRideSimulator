import React from "react"

var ThirdFooter = React.createClass({
	_clickStart: function(){
		location.hash = '#shirtOff'
	},

	_cleanShirt: function(){
		location.hash = '#allOver'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._cleanShirt}>CLEAN SHIRT</button>
				<button onClick={this._clickStart}>TAKE OFF SHIRT</button>
			</footer>
			)
	}
})

export default ThirdFooter

// <button onClick={this._clickStart}>START</button>