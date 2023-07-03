let menu = createMenu({
	pages: Array.from(document.getElementsByClassName("item-list"))
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

menu.getItems(0).forEach(g => {
	g.addEventListener("mouseenter", () => {
		menu.goto(g);
	});
});
