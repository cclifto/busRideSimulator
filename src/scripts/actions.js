import STORE from "./store"
//below is the import syntax when importing something by name from a file,
//and that thing is not the default export
import textAndChoices from "./textAndChoices"

var ACTIONS = {
	handleChoice: function(buttonValue) {
		var currentScriptObj = textAndChoices[buttonValue]
		STORE._set({
			displayText: currentScriptObj.displayText,
			choices: currentScriptObj.choices
		})
	}
}
export default ACTIONS