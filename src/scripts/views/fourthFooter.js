import React from "react"

var FourthFooter = React.createClass({
	_turnAway: function(){
		location.hash = '#turnAway'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._turnAway}>TURN AWAY</button>
				<button>OFFER BREATH MINT</button>
			</footer>
			)
	}
})

export default FourthFooter

