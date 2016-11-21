import React from "react"
import ACTIONS from "../actions"

var ScrollBox = React.createClass({	

	render: function(){
		console.log(this, "this is the scroll box")
		return (
			<div className="scroll-box">
				<p>{this.props.display_text}</p>
			</div>
		)
	}
})


export default ScrollBox