import React from "react"

var FourthFooter = React.createClass({
	_turnAway: function(){
		location.hash = '#turnAway'

	},

	_mint: function(){
		location.hash = '#mint'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._turnAway}>TURN AWAY</button>
				<button onClick={this._mint}>OFFER BREATH MINT</button>
			</footer>
			)
	}
})

export default FourthFooter

