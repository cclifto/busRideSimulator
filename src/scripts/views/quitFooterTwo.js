import React from "react"

var QuitFooterTwo = React.createClass({
	_dateNight: function(){
		location.hash = '#dateNight'
	},

	render: function(){
		return (
			<footer>
				<button onClick={this._dateNight}>QUITTIN' TIME!</button>
			</footer>
			)
	}
})

export default QuitFooterTwo

