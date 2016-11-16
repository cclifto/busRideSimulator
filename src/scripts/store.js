import Backbone from 'backbone'
import _ from 'underscore'
import TextAndChoices from "./textAndChoices"


const STORE = _.extend(Backbone.Events,{
	_data: {
		displayText: '',
		choices: []
	},
	_getData: function() {
		return this._data
	},
	_get: function(key) {
		return this._data[key]
	},
	_emitChange: function() {
		this.trigger('STOREChange')
	},
	_set: function(obj) {
		this._data = _.extend(this._data, obj)
		this._emitChange()
})
STORE._initialize()
export default STORE