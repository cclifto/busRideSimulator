import React from "react"
import ACTIONS from "../actions"

var Buttons = React.createClass({

	_handleChoice: function(eventObj) {
		var buttonValue = eventObj.target.value
		ACTIONS.nextScript(buttonValue)
	},

	_getButtonsArray: function() {
		var choiceObjs = this.props.choices
		var buttsArray = []
		for(var i = 0; i < choiceObjs.length; i++){
			buttsArray.push(<button onClick={this._handleChoice} value={choiceObjs[i].buttonValue}>{choiceObjs[i].buttonText}</button>)
		}
		return buttsArray
	},


	render: function(){
		console.log(this, "these are buttons")
		return (
			<footer>
				{this._getButtonsArray()}
				{/*this.props.choices.map(buttonObj => <button value={buttonObj.buttonValue}>{buttonObj.buttonText}</button>)*/}
			</footer>
			)
	}
})

export default Buttons