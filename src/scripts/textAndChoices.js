var textAndChoices = {
	start: {
		display_text: ">>Welcome to Bus Ride Simulator. Press "+'"Start"'+" to begin your public transit adventure.",
		choices: [{buttonText: "START",
				   buttonValue: 'firstView'}]
	},

	firstView: {
		display_text: ">>You are riding the bus in your town. It's a prime example of public transit. It's cheap, affordable and, get this, good for the environment! Good on you, buddy! So... like... what do you wanna do?",
		choices: [{buttonText: "TALK TO NEIGHBOR",
				   buttonValue: 'talkNeighbor'},
				  {buttonText:"EAT LUNCH",
				   buttonValue: 'eatLunch'}]
	},

	eatLunch: {
		display_text: ">>Alright, pastrami and cream cheese! Time to chow dow- Ah crap. The bus hit a pot hole. Now you have pastrami all over you.",
		choices: [{buttonText: "CLEAN SHIRT",
					buttonValue:'cleanShirt'},
					{buttonText: "TAKE OFF SHIRT",
					buttonValue: 'shirtOff'}]
	},

	shirtOff: {
		display_text: ">>What the hell, man?! You can't take your shirt off on the bus! The bus driver tells you to get off at the next stop. You miss work and lose your job because you were still in your probationary period.",
		choices: [{buttonText:"START OVER?",
					buttonValue: 'firstView'}]
	},

	cleanShirt: {
		display_text: ">>Oh god. That didn't help at ALL. You just spread it all over your shirt. You got grease and cream cheese EVERYWHERE. What the fuck are you gonna do? You gotta go to work and you're still on your probationary period!",
		choices: [{buttonText:"SCREW IT, I'M GOING TO WORK",
					buttonValue: 'screwIt'},
					{buttonText: "BAIL",
					 buttonValue: 'bail'}]
	},

	screwIt: {
		display_text: ">>You finish riding the bus until you get to work. With CEO-like confidence, you get off the bus and walk into the office. Your coworkers are blown away. The boss-man gives you a thumbs up. The hot secretary pulls down her glasses to get a better look at you and make sure she's not dreaming. Then you accidentally hit "+'"Reply All"'+" on an email and you're quickly fired.",
		choices:[{buttonText: "START OVER?",
					buttonValue: 'firstView'}]
	},

	bail: {
		display_text: ">>You get off the bus and walk home with pride, your obvious confidence building an aura around you. When you get home, you check your answering machine to hear a message from your boss telling you that you're fired.",
		choices: [{buttonText: "START OVER?",
					buttonValue: 'firstView'}]
	},

	talkNeighbor: {
		display_text: ">>You turn to the person sitting next to you and initiate a conversation. They have a smile on their face and are very welcoming. After a few minutes, the conversation really picks up and becomes personal. The connection is obvious. The connection is real. You begin to think you could have a future with this person. But their breath stinks.",
		choices: [{buttonText:"TURN AWAY",
					buttonValue: 'turnAway'},
					{buttonText: "OFFER BREATH MINT",
					buttonValue: 'breathMint'}]
	},

	turnAway: {
		display_text: ">>You turn back to the window and watch the traffic go by. You arrive at your stop and go to work. Thank you for using public transit.",
		choices: [{buttonText: "START OVER?",
					buttonValue: 'firstView'}]
	},

	breathMint: {
		display_text: ">>You pop a breath mint in your mouth and offer your neighbor one (you clever commuter, you!). They gladly accept and introduce themselves as Jordan. You continue talking on your bus ride and make plans to meet after work for happy hour. Oh boy! Eventually, you get off the bus and go to work. While you are working, you get a text message.",
		choices: [{buttonText: "READ IT",
					buttonValue: 'readIt'},
					 {buttonText: "KEEP WORKING",
					  buttonValue: 'keepWorking'}]
	},

	keepWorking: {
		display_text: ">>You keep working. Probably best to make a good impression. After all, you're still in your probationary period!",
		choices: [{buttonText:"QUITTIN' TIME!",
					buttonValue: 'ignoreQuit'}]
	},

	ignoreQuit: {
		display_text: ">>You show up at the bar for happy hour and Jordan is no where to be found. You check your phone and see that text you got earlier was from her and she wanted to meet at her place first! Oh geez! You try calling but she doesn't pick up, so you go home, alone.",
		choices: [{buttonText:"START OVER?",
					buttonValue: 'firstView'}]
	},

	readIt: {
		display_text: ">>It's from Jordan! "+'"Hey, let'+'s meet at my place before we go out :)"'+ "She even included her address! What a nice lady.",
		choices: [{buttonText:"QUITTIN' TIME!",
					buttonValue: 'readQuit'}]
	},

	readQuit: {
		display_text: ">>You show up at Jordan's house and knock on the door. It opens slightly. You call her name out, but there is no response.",
		choices: [{buttonText:"GO IN",
					buttonValue: 'goIn'},
					{buttonText: "GO HOME",
					buttonValue: 'goHome'}]
	},

	goHome:{
		display_text: ">>Well, she's probably ok. It's like Schrödinger's cat. Best way to keep her alive is to avoid confirming that she's dead. You go home to drink the six-pack you have in the fridge and get ready for work tomorrow.",
		choices: [{buttonText:"START OVER?",
					buttonValue: 'firstView'}]
	},

	goIn: {
		display_text: ">>You open the door slowly and walk inside. You call out for Jordan again and there is no response. You shut the door behind you. It's dark so you look for a lightswitch and turn the lights on. You see Jordan's mutilated corpse on the ground and blood all over the walls. Your phone vibrates and you look at it to see a text message from an unknown number that reads "+'"POLICE R COMING. RUN"',
		choices: [{buttonText:"TO BE CONTINUED",
					buttonValue:'firstView'}]
	}
}

export default textAndChoices