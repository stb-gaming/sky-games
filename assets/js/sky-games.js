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



openPage(0);
