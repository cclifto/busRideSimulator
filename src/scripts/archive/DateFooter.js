import React from "react"

var DateFooter = React.createClass({
	_goIn: function(){
		location.hash = '#goIn'
	},

	_goHome: function(){
		location.hash = '#goHome'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._goIn}>GO IN</button>
				<button onClick={this._goHome}>GO HOME</button>
			</footer>
			)
	}
})

export default DateFooter

