import React from "react"
import Header from "./header"
import FourthFooter from './fourthFooter'

var CleanNeighbor = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">
					<img src="http://lorempixel.com/400/400/"></img>
				</div>
				<FourthFooter />
			</div>
		)
	}
})

export default CleanNeighbor