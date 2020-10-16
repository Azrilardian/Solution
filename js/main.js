function slider() {
	const carouselSlide = document.querySelector(".testimoni-slider-content");
	const carouselImg = document.querySelectorAll(".testimoni-flex");
	const nextBtn = document.querySelector("p.next");
	const prevBtn = document.querySelector("p.prev");

	//! Counter
	let counter = 0;
	const size = carouselImg[0].clientWidth + 40;
	nextBtn.addEventListener("click", function () {
		if (counter < 3) {
			counter++;
			carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
			carouselImg.forEach(function (e) {
				if (e.classList.contains("active")) {
					e.classList.remove("active");
				}
			});
			carouselImg[counter].classList.add("active");
		} else if (counter == 3) {
			return;
		}
	});
	prevBtn.addEventListener("click", function () {
		if (counter > 0) {
			counter--;
			carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
			carouselImg.forEach(function (e) {
				if (e.classList.contains("active")) {
					e.classList.remove("active");
				}
			});
			carouselImg[counter].classList.add("active");
		} else if (counter == 0) {
			return;
		}
	});
}
slider();

function nav() {
	const navHamburger = document.querySelector("nav .hamburger");
	const navHamburgerLine = document.querySelectorAll("nav .hamburger span");
	const navUl = document.querySelector(".nav-left ul");
	navHamburger.addEventListener("click", function () {
		navUl.classList.toggle("active");
		navHamburgerLine.forEach((e) => e.classList.toggle("active"));
	});
}
nav();
