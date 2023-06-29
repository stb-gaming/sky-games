let page = 0;
let pages = Array.from(document.getElementsByClassName("games-list"));

function openPage() {
	closeAll();
	pages[page].style.display = null;
}

function closeAll() {
	pages.forEach(p => p.style.display = "none");
}

function nextPage() {
	if (page != pages.length - 1) {
		page++;
		openPage();
	}
}
function lastPage() {
	if (page != 0) {
		page--;
		openPage();
	}
}



let focusX = focusY = 0;

function focus() {
	if (focusX >= 3) {
		if (page == pages.length - 1) {
			focusX = 2;
		} else {
			nextPage();
			focusX = 0;
			if (pages[page].children.length - 2 < focusY * 3) {
				focusY = Math.floor((pages[page].children.length - 2) / 3);
			}
		}
	}
	if (focusX < 0)
		if (page == 0) {
			focusX = 0;
		} else {
			lastPage();
			focusX = 2;
		}

	if (focusY >= 3) focusY = 2;
	if (focusY < 0) focusY = 0;

	let focusI = focusY * 3 + focusX;

	console.log(`Focus: (${focusX},${focusY}) ${focusI}`, pages[page].children[focusI]);

	let game = pages[page].children[focusI];
	if (game.classList.contains("game")) pages[page].children[focusI].focus();
}




function pressYellow() {
	if (song.paused) {
		song.play();
	} else {
		song.pause();
	}
}


function pressBlue() {
	window.location = "/sky-games";
}

function pressSelect() {
	pages[page].children[focusY * 3 + focusX].click();
}


function pressLeft() {
	focusX--;
	focus();
}
function pressRight() {
	focusX++;
	focus();
}
function pressUp() {
	focusY--;
	focus();
}
function pressDown() {
	focusY++;
	focus();
}

openPage(0);
focus();
