let controls = [
	{
		title: "up",
		keys: ["ArrowUp", "i"],
		function: "pressUp"
	},
	{
		title: "down",
		keys: ["ArrowDown", "k"],
		function: "pressDown"
	},
	{
		title: "left",
		keys: ["ArrowLeft", "j"],
		function: "pressLeft"
	},
	{
		title: "right",
		keys: ["ArrowRight", "l"],
		function: "pressRight"
	},
	{
		title: "select",
		keys: [" ", "Enter"],
		function: "pressSelect"
	},
	{
		title: "back",
		keys: ["Backspace"],
		function: "pressBack"
	},
	{
		title: "red",
		keys: ["q"],
		function: "pressRed"
	},
	{
		title: "green",
		keys: ["w"],
		function: "pressGreen"
	},
	{
		title: "yellow",
		keys: ["e"],
		function: "pressYellow"
	},
	{
		title: "blue",
		keys: ["r"],
		function: "pressBlue"
	},
	{
		title: "help",
		keys: ["t"],
		function: "presshelp"
	}
];




document.addEventListener("keyup", event => {
	for (const control of controls)
		if (control.keys.includes(event.key) && control.function && window[control.function])
			window[control.function]();
});
