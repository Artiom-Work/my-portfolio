"use strict";

const darkModeBtn = document.querySelector('.dark-mode-btn');

// 1. Проверка тёмной на уровне системных настроек пользователя
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	darkModeBtn.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

// 2. Проверка тёмной темы в local storage
if (localStorage.getItem('darkMode') === 'dark') {
	darkModeBtn.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
	darkModeBtn.classList.remove("dark-mode-btn--active");
	document.body.classList.remove("dark");
}

// Если меняются системные настройки пользователя , меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
	const newColorShame = event.matches ? "dark" : "light";

	if (newColorShame === "dark") {
		darkModeBtn.classList.add("dark-mode-btn--active");
		document.body.classList.add("dark");
		localStorage.setItem("darkMode", "dark");
	} else {
		darkModeBtn.classList.remove("dark-mode-btn--active");
		document.body.classList.remove("dark");
		localStorage.setItem("darkMode", "light");
	}
});

// Включение ночного режима по кнопке
darkModeBtn.onclick = function () {
	darkModeBtn.classList.toggle('dark-mode-btn--active');
	const isDark = document.body.classList.toggle('dark');

	if (isDark) {
		localStorage.setItem('darkMode', 'dark');
	} else {
		localStorage.setItem('darkMode', 'light');
	}
}


// Main page , slider swiper
const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 0,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const projectImages = document.querySelectorAll('.project__image-wrapper');

projectImages.forEach(element => {
	const projectImage = element;

	projectImage.addEventListener('click', (e) => {
		const touchedImage = e.target;
		const projectDescription = touchedImage.nextElementSibling;

		rotateProjectImage(touchedImage, projectDescription);
	});
});

function rotateProjectImage(image, description) {
	image.style.transitionDelay = '0s';
	description.style.transitionDelay = '0.5s';

	image.style.transform = "rotateY(-90deg)";
	description.style.transform = "rotateY(0deg)";

	description.addEventListener('click', (e) => {
		description.style.transitionDelay = '0s';
		image.style.transitionDelay = "0.5s";
		description.style.transform = "rotateY(90deg)";
		image.style.transform = "rotateY(0deg)";
	});
}
// -------------------