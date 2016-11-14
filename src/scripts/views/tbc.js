import React from "react"

var TBC = React.createClass({
	_clickStartOver: function(){
		location.hash = '#home'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._clickStartOver}>TO BE CONTINUED</button>
			</footer>
			)
	}
})

export default TBC