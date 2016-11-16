import React from "react"
import Header from "./header"
import ScrollBox from './scrollBox'
import Buttons from './buttons'
import STORE from '../store'

var AppView = React.createClass({	
	componentWillMount: function() {
		ACTIONS.handleChoice(start)
		// start subscribing to the event that's broadcast by the store. 


		// when you hear the right event name, run a function that will call setState on this component.
	},

//get initial state needs to return the object that becomes the state of the component

	getInitialState: function() {
		return STORE._getData()
	},

	render: function(){
		// FIRST, BEFORE ANY OTHER WORK
		// you need to champagne-waterfall your initial state down to the components that need it
		// and render accordingly in those components.
		return (
			<div className="list-view">
				<Header />
				<ScrollBox />
				<Buttons />
			</div>
		)
	}
})


export default AppView