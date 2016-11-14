import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './views/header'
import Footer from './views/footer'
import SecondFooter from './views/secondFooter'
import ThirdFooter from './views/thirdFooter'
import FourthFooter from './views/fourthFooter'
import GameOver from './views/gameOver'
import StartView from './views/startView'
import FirstBusView from './views/firstBusView'
import EatLunch from './views/eatLunch'
import AllOver from './views/allOver'
import ShirtOff from './views/shirtOff'
import CleanNeighbor from './views/cleanNeighbor'
import TurnAway from './views/turnAway'
import CleanShirtFooter from './views/cleanShirtFooter'

var app = function() {
	var Controller = Backbone.Router.extend({
		routes: {
			'home': 'handleHome',
			'onBus': 'handleOnBus',
			'eat': 'handleEat',
			'allOver': 'allOver',
			'shirtOff': 'shirtOff',
			'cleanTalk': 'handleCleanTalk',
			'turnAway': 'turnAway',
			'*default': 'handleDefault'
		},
		handleHome: function(){
			ReactDOM.render(<StartView />, document.querySelector(".container"))
		},
		handleOnBus: function(){
			ReactDOM.render(<FirstBusView />, document.querySelector(".container"))
		},
		handleEat: function(){
			ReactDOM.render(<EatLunch />, document.querySelector(".container"))
		},
		shirtOff: function(){
			ReactDOM.render(<ShirtOff />, document.querySelector(".container"))
		},
		allOver: function(){
			ReactDOM.render(<AllOver />, document.querySelector(".container"))
		},
		handleCleanTalk: function(){
			ReactDOM.render(<CleanNeighbor />, document.querySelector(".container"))
		},
		turnAway: function(){
			ReactDOM.render(<TurnAway />, document.querySelector(".container"))
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