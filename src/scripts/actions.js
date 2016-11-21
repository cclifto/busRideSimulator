import STORE from "./store"
//below is the import syntax when importing something by name from a file,
//and that thing is not the default export
import textAndChoices from "./textAndChoices"

var ACTIONS = {
	nextScript: function(buttonValue){
		var nextScriptObj = textAndChoices[buttonValue]
		STORE._set({
			display_text: nextScriptObj.display_text,
			choices: nextScriptObj.choices
		})
	}
}
export default ACTIONS