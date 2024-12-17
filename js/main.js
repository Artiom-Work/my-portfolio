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

const mediaQueryMobile = window.matchMedia('(max-width: 678px)');
const projectImages = document.querySelectorAll('.project__image-wrapper');
let projectImage = '';
let projectDescription = '';

if (mediaQueryMobile.matches) {
	projectImages.forEach(element => {
		const projectImageWraper = element;

		projectImageWraper.addEventListener('click', (e) => {
			projectImage = projectImageWraper.querySelector('.project__image');
			projectDescription = projectImageWraper.querySelector('.project__description');
			if (e.target === projectImage) {
				rotateImage();
			}
			if (e.target.closest('.project__description') === projectDescription) {
				rotateDescroption();
			}
		});
	});
}

function rotateImage() {
	projectImage.style.transitionDelay = '0s';
	projectImage.style.opacity = '0';
	projectDescription.style.transitionDelay = '0.5s';
	projectDescription.style.opacity = '1';
	projectImage.style.transform = "rotateY(-90deg)";
	projectDescription.style.transform = "rotateY(0deg)";
}

function rotateDescroption() {
	projectDescription.style.transitionDelay = '0s';
	projectImage.style.transitionDelay = "0.5s";
	projectImage.style.opacity = '1';

	projectDescription.style.transform = "rotateY(90deg)";
	projectImage.style.transform = "rotateY(0deg)";
	projectDescription.style.opacity = '0';
}
// -------------------

// For mobile menu
const menuCheckbox = document.getElementById('menu-switch');
const lockPageBackground = document.querySelector('.mobile-menu__wrapper');
const mobileMenu = document.querySelector('.mobile-menu__box');

menuCheckbox.addEventListener('change', function (e) {
	if (menuCheckbox.checked) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "visible";
	}
});

lockPageBackground.addEventListener('click', (e) => {
	if (e.target === lockPageBackground) {
		menuCheckbox.checked = false;
		document.body.style.overflow = "visible";
	}
});
// ----------------