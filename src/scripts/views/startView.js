import React from "react"
import Header from "./header"
import Footer from './footer'

var StartView = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">
					<p>>>Welcome to Bus Simulator. Press "Start" to begin your public transit adventure.</p>
				</div>
				<Footer />
			</div>
		)
	}
})


export default StartView