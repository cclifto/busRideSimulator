import React from "react"

var Footer = React.createClass({
	_clickStart: function(){
		location.hash = '#onBus'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._clickStart}>START</button>
			</footer>
			)
	}
})

export default Footer