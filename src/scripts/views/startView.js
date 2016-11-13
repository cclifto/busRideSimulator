import React from "react"
import Header from "./header"
import Footer from './footer'

var StartView = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="start-screen">
					<img src="http://lorempixel.com/400/400/"></img>
				</div>
				<Footer />
			</div>
		)
	}
})


export default StartView