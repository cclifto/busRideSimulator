import React from "react"
import ACTIONS from "../actions"

var Buttons = React.createClass({

	render: function(){
		return (
			<footer>
				{ACTIONS.handleChoice.currentScriptObj.choices}
			</footer>
			)
	}
})

export default Buttons