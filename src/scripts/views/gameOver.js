import React from "react"

var GameOver = React.createClass({
	_clickStartOver: function(){
		location.hash = '#home'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._clickStartOver}>START OVER?</button>
			</footer>
			)
	}
})

export default GameOver