let page = 0;
let pages = Array.from(document.getElementsByClassName("games-list"));
let currentGame;


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



let focusX = focusY = focusXlast = focusYlast = 0;

function focus() {
	if (focusX >= 3) {
		if (page == pages.length - 1) {
			focusX = 2;
		} else {
			nextPage();
			focusX = focusXlast = 0;
			if (pages[page].children.length - 2 < focusY * 3) {
				focusY = focusYlast = Math.floor((pages[page].children.length - 2) / 3);
			}
		}
	}
	if (focusX < 0)
		if (page == 0) {
			focusX = 0;
		} else {
			lastPage();
			focusX = focusXlast = 2;
		}

	if (focusY >= 3) focusY = 2;
	if (focusY < 0) focusY = 0;

	let focusI = focusY * 3 + focusX;

	//lastGame.classList.remove("up", "down", "left", "right");
	let game = pages[page].children[focusI];
	game.classList.remove("up", "down", "left", "right");

	if (focusXlast > focusX) {
		// gone left
		game.classList.add("left");
		setTimeout(() => {
			game.classList.remove("left");
		}, 0);

	}
	if (focusXlast < focusX) {
		//gone right
		game.classList.add("right");
		setTimeout(() => {
			game.classList.remove("right");
		}, 0);
	}
	if (focusYlast > focusY) {
		// gone up
		game.classList.add("up");
		setTimeout(() => {
			game.classList.remove("up");
		}, 0);

	}
	if (focusYlast < focusY) {
		//gone down
		game.classList.add("down");
		setTimeout(() => {
			game.classList.remove("down");
		}, 0);

	}

	if (game.classList.contains("game")) {
		pages[page].children[focusI].focus();
		currentGame = game;
		updateGameInfo();
	}
	focusXlast = focusX;
	focusYlast = focusY;
}

function updateGameInfo() {
	let gameInfo = document.getElementById("game-info");
	console.log(currentGame);
	let image = new Image();
	gameInfo.getElementsByTagName("h1")[0].innerText = image.alt = currentGame.dataset.title;
	image.src = image_prefix + (currentGame.dataset.screenshot || currentGame.dataset.image);
	if (currentGame.dataset.new)
		gameInfo.classList.add("new");
	else
		gameInfo.classList.remove("new");
	gameInfo.getElementsByTagName("img")[0].replaceWith(image);
	gameInfo.getElementsByTagName("p")[0].innerText = currentGame.dataset.description;
}

function pressRed() {
	let controls = document.getElementById("controls");
	controls.style.display = controls.style.display ? null : "none";
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

Array.from(document.getElementsByClassName("game")).forEach(g => {
	g.addEventListener("mouseenter", () => {
		currentGame = g;
		updateGameInfo();
	});
});
