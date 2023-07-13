function pressLeft() {
	menus[menu].left();
}
function pressRight() {
	menus[menu].right();
}
function pressUp() {
	menus[menu].up();
}
function pressDown() {
	menus[menu].down();
}

SkyRemote.createSkyRemote({
	pressRed, pressGreen, pressYellow, pressBack, pressBlue, pressSelect, pressLeft, pressRight, pressUp, pressDown
});


window.addEventListener("click", () => {
	if (!musicplayed) toggleMusic();
});


document.addEventListener("keyup", event => {
	if (!musicplayed) toggleMusic();
});
