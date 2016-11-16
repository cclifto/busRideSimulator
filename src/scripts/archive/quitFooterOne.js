import React from "react"

var QuitFooterOne = React.createClass({
	_stoodUp: function(){
		location.hash = '#stoodUp'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._stoodUp}>QUITTIN' TIME!</button>
			</footer>
			)
	}
})

export default QuitFooterOne

