import React from "react"

var TextFooter = React.createClass({
	_readIt: function(){
		location.hash = '#readIt'
	},

	_keepWorking: function(){
		location.hash = '#ignore'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._readIt}>READ IT</button>
				<button onClick={this._keepWorking}>KEEP WORKING</button>
			</footer>
			)
	}
})

export default TextFooter

