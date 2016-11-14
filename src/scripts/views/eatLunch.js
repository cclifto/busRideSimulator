import React from "react"
import Header from "./header"
import ThirdFooter from './thirdFooter'

var EatLunch = React.createClass({	

	render: function(){
		return (
			<div className="list-view">
				<Header />
				<div className="view-container">
					<img src="http://lorempixel.com/400/400/"></img>
				</div>
				<ThirdFooter />
			</div>
		)
	}
})

export default EatLunch