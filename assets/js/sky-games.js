//let page = 0;
let pages = Array.from(document.getElementsByClassName("games-list")),
	musicplayed = false,


	gamesMenu = createMenu({
		pages,
		rows: 3,
		columns: 3,
		itemSelector: "a.game",
		onFocus: updateGameInfo,
		animations: true
	});
gamesMenu.init();

function nextPage() {
	if (!musicplayed) toggleMusic();
	gamesMenu.nextPage();

}
function lastPage() {
	if (!musicplayed) toggleMusic();
	gamesMenu.lastPage();
}


function updateGameInfo() {
	let gameInfo = document.getElementById("game-info"),
		image = new Image(),
		currentGame = gamesMenu.getSelected();
	gameInfo.getElementsByTagName("h1")[0].innerText = image.alt = currentGame.dataset.title;
	image.src = image_prefix + (currentGame.dataset.gameplay || currentGame.dataset.image || currentGame.dataset.splash);
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

function toggleMusic() {
	if (song.paused) {
		musicplayed = true;
		song.play();
	} else {
		song.pause();
	}

}


function pressYellow() {
	toggleMusic();
}


function pressBlue() {
	window.location = "/sky-games";
}

function pressSelect() {
	//pages[page].children[focusY * 3 + focusX].click();
}


function pressLeft() {
	//focusX--;
	//focus();
	gamesMenu.left();
}
function pressRight() {
	//focusX++;
	//focus();
	gamesMenu.right();
}
function pressUp() {
	//focusY--;
	//focus();
	gamesMenu.up();
}
function pressDown() {
	//focusY++;
	//focus();
	gamesMenu.down();
}

//openPage(0);
//focus();


window.addEventListener("click", () => {
	if (!musicplayed) toggleMusic();
});

Array.from(document.getElementsByClassName("game")).forEach(g => {
	g.addEventListener("mouseenter", () => {
		// currentGame = g;
		// updateGameInfo();
		gamesMenu.goto(g);
	});

	g.addEventListener("click", e => {
		e.preventDefault();

		splash(image_prefix + (g.dataset.splash || g.dataset.image));
		setTimeout(() => {
			window.location.href = g.dataset.url;
		}, 5000);
	});
});


document.addEventListener("keyup", event => {
	if (!musicplayed) toggleMusic();
});
