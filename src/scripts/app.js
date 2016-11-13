import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './views/header'
import Footer from './views/footer'
import StartView from './views/startView'

var app = function() {
	var Controller = Backbone.Router.extend({
		routes: {
			'home': 'handleHome',
			'*default': 'handleDefault'
		},
		handleHome: function(){
			ReactDOM.render(<StartView />, document.querySelector(".container"))
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