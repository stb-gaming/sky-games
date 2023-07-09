let menu = createMenu({
	pages: Array.from(document.getElementsByClassName("menu"))
});


menu.init();

function pressSelect() {
	menu.getSelected().click();
}

function pressUp() {
	menu.up();
}
function pressDown() {
	menu.down();
}

SkyRemote.createSkyRemote({
	pressSelect, pressUp, pressDown
});

menu.getItems(0).forEach(g => {
	g.addEventListener("mouseenter", () => {
		menu.goto(g);
	});
});
