let pages = Array.from(document.getElementsByClassName("test-menu"));


let menu = createMenu({
	pages, rows: 3, columns: 3
});


function pressDown() {
	menu.down();
}


function pressUp() {
	menu.up();
}


function pressLeft() {
	menu.left();
}


function pressRight() {
	menu.right();
}
