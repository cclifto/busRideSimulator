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
import Bail from './views/bail'
import ScrewIt from './views/screwIt'
import CleanNeighbor from './views/cleanNeighbor'
import TurnAway from './views/turnAway'
import Mint from './views/mint'
import ReadIt from './views/readIt'
import Ignore from './views/Ignore'
import StoodUp from './views/StoodUp'
import DateNight from './views/DateNight'
import TextFooter from './views/textFooter'
import QuitFooterOne from './views/quitFooterOne'
import QuitFooterTwo from './views/quitFooterTwo'
import CleanShirtFooter from './views/cleanShirtFooter'
import DateFooter from './views/dateFooter'
import GoHome from './views/goHome'
import GoIn from './views/goIn'
import TBC from './views/tbc'

var app = function() {
	var Controller = Backbone.Router.extend({
		routes: {
			'home': 'handleHome',
			'onBus': 'handleOnBus',
			'eat': 'handleEat',
			'allOver': 'allOver',
			'shirtOff': 'shirtOff',
			'bail': 'bail',
			'readIt': 'readIt',
			'ignore': 'ignore',
			'stoodUp': 'stoodUp',
			'dateNight': 'dateNight',
			'screwIt': 'screwIt',
			'cleanTalk': 'handleCleanTalk',
			'turnAway': 'turnAway',
			'mint': 'mint',
			'goHome': 'goHome',
			'goIn': 'goIn',
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
		bail: function(){
			ReactDOM.render(<Bail />, document.querySelector(".container"))
		},
		screwIt: function(){
			ReactDOM.render(<ScrewIt />, document.querySelector(".container"))
		},
		dateNight: function(){
			ReactDOM.render(<DateNight />, document.querySelector(".container"))
		},
		stoodUp: function(){
			ReactDOM.render(<StoodUp />, document.querySelector(".container"))
		},
		handleCleanTalk: function(){
			ReactDOM.render(<CleanNeighbor />, document.querySelector(".container"))
		},
		mint: function(){
			ReactDOM.render(<Mint />, document.querySelector(".container"))
		},
		readIt: function(){
			ReactDOM.render(<ReadIt />, document.querySelector(".container"))
		},
		ignore: function(){
			ReactDOM.render(<Ignore />, document.querySelector(".container"))
		},
		goHome: function(){
			ReactDOM.render(<GoHome />, document.querySelector(".container"))
		},
		goIn: function(){
			ReactDOM.render(<GoIn />, document.querySelector('.container'))
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