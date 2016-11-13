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

// <a href={"#detail/" + model.get("_id")}><h5>{model.get('headline').main}</h5></a>