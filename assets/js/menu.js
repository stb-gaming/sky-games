function createMenu({
	pages,
	rows,
	columns = 1,
	onFocus = (item) => { },
	itemSelector = "a"
}) {
	let x = y = p = dx = dy = dp = 0;

	function init() {
		pages.forEach((page, i) => {
			if (i != p) page.style.display = "none";
		});

		updateFocus();
	}

	/*
	using dx dy change the x and y based on the page contents
	*/
	function updateFocus() {
		x += dx + dp * columns;
		y += dy;
		dp += Math.floor(x / columns) - p;
		p += dp;

		// check of column has ended
		if (y < 0) {
			dy -= y - 0;
			y = 0;
		}
		if (y >= rows) {
			dy -= y - rows - 1;
			y = rows - 1;
		}


		// if theres no more pages go back one
		if (p >= pages.length || p < 0) {
			p -= dp;
			x -= dp * columns;
			dp = 0;
		}


		// Update Page Focus
		pages[p - dp].style.display = "none"; //hide last page
		pages[p].style.display = null; // Show new page


		let item = getSelected();

		//Update Animations
		if (dy > 0) item.classList.add("down");
		if (dy < 0) item.classList.add("up");
		if (dx > 0) item.classList.add("right");
		if (dx < 0) item.classList.add("left");
		// fixes a bug where when you mouse over something
		// previously focussed with the keyboard it replays
		// movement animation
		setTimeout(() => {
			item.classList.remove("left", "right", "up", "down");
		});

		//Update Item Focus
		item.focus({ focusVisible: true });
		console.log("focus:", { p, x, y });

		dp = dx = dy = 0;
	}

	function nextPage() {
		dp = 1;
		updateFocus();
	}

	function lastPage() {
		dp = -1;
		updateFocus();

	}

	function left() {
		dx = -1;
		updateFocus();
	}

	function right() {
		dx = 1;
		updateFocus();;
	}

	function up() {
		dy = -1;
		updateFocus();
	}

	function down() {
		dy = 1;
		updateFocus();
	}

	function getItems(p) {
		return Array.from(pages[p].querySelectorAll(itemSelector));
	}

	function getItem(p, x, y) {
		let localX = x - p * columns,
			i = y * columns + localX;

		return getItems(p)[i];
	}

	function getSelected() {
		return getItem(p, x, y);
	}

	init();

	return {
		nextPage, lastPage, left, right, up, down, getSelected, getItems, getItem
	};
}
