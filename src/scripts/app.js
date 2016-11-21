import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './views/header'
// import Footer from './views/footer'
import AppView from './views/appView'
import textAndChoices from './textAndChoices'

var app = function() {

	// 4 components
		// parent component
		// header
		// scroll window
			// (OPTIONAL) component for each script "moment"
		// buttons container

	var Controller = Backbone.Router.extend({
		routes: {
			'home': 'handleHome',
			// 'checkpoint/:title',
			'*default': 'handleDefault'
		},
		handleHome: function(){
			ReactDOM.render(<AppView />, document.querySelector(".container"))
		},
		handleDefault: function(){
			location.hash = 'home'
		},
		initialize: function(){
			Backbone.history.start()
		}
	})
	var controller = new Controller();
}


app()