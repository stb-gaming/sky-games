

let gamesMenu = createMenu({
	pages: Array.from(document.getElementsByClassName("games-list")),
	rows: 2,
	columns: 4,
	itemSelector: "a.game-item",
});

gamesMenu.init();

function pressLeft() {
	gamesMenu.left();
}
function pressRight() {
	gamesMenu.right();
}
function pressUp() {
	gamesMenu.up();
}
function pressDown() {
	gamesMenu.down();
}


function pressSelect() {
	gamesMenu.getSelected().click();
}



function pressRed() {
	console.log("Goto");
};



function pressBlue() {
	window.location = "/sky-games";
}

SkyRemote.createSkyRemote({
	pressRed, pressBlue, pressSelect, pressLeft, pressRight, pressUp, pressDown
});

Array.from(document.getElementsByClassName("game-item")).forEach(g => {
	g.addEventListener("mouseenter", () => {
		gamesMenu.goto(g);
	});
});
