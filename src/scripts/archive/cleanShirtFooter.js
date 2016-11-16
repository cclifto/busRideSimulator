import React from "react"

var CleanShirtFooter = React.createClass({
	_bail: function(){
		location.hash = '#bail'
	},

	_screw: function(){
		location.hash = '#screwIt'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._screw}>SCREW IT, I'M GOING TO WORK</button>
				<button onClick={this._bail}>BAIL</button>
			</footer>
			)
	}
})

export default CleanShirtFooter

// <button onClick={this._clickStart}>START</button>