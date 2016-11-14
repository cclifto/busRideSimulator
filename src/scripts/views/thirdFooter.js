import React from "react"

var ThirdFooter = React.createClass({
	_clickStart: function(){
		location.hash = '#shirtOff'
	},

	render: function(){
		return (
			<footer>
				<button>CLEAN SHIRT</button>
				<button onClick={this._clickStart}>TAKE OFF SHIRT</button>
			</footer>
			)
	}
})

export default ThirdFooter

// <button onClick={this._clickStart}>START</button>