import React from "react"
import Header from "./header"
import SecondFooter from './secondFooter'

var FirstBusView = React.createClass({	

	render: function(){
		return (
			<div className="first-bus-view">
				<Header />
				<div className="view-container">
					<img src="http://lorempixel.com/400/400/"></img>
				</div>
				<SecondFooter />
			</div>
		)
	}
})




export default FirstBusView