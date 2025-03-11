document.addEventListener("DOMContentLoaded", function () {
	const cWraps = document.querySelectorAll(".c-wrap");

	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	function checkVisibility() {
		cWraps.forEach(cWrap => {
			if (isInViewport(cWrap)) {
				cWrap.classList.add("animate");
			}
		});
	}

	window.addEventListener("scroll", checkVisibility);
	window.addEventListener("resize", checkVisibility);
	checkVisibility();
});

/* navbar */

const check = document.getElementById("check");
const nav_menu = document.getElementById("nav-menu");

check.addEventListener("click", function () {
	if (check.checked) {
		nav_menu.classList = "nav-menu";
		nav_menu.style.display = "block";
		nav_menu.classList.remove("nav-hide");
		nav_menu.classList.add("nav-show");
	} else {
		nav_menu.classList.remove("nav-show");
		nav_menu.classList.add("nav-hide");
		setTimeout(function () {
			nav_menu.style.display = "none";
		}, 300);
	}
});


function goBack() {
    window.history.back()
}