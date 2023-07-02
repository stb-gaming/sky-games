let pages = Array.from(document.getElementsByClassName("test-menu"));


let menu = createMenu({
	pages, rows: 3, columns: 3
});

Array.from(document.querySelectorAll(".menu-item")).forEach(item => {
	item.addEventListener("mouseenter", () => {
		menu.goto(item);
	});
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
