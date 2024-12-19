const languageButtons = document.querySelector('.lang-switch');

const languages = {
	ru: () => {
		movingRight();
		localStorage.setItem("language", "ru");
		setLanguage('ru');
	},
	en: () => {
		movingLeft();
		localStorage.setItem("language", "en");
		setLanguage('en');
	}
};
console.log(languages);

document.getElementById('translate-to-english').addEventListener('click', languages.en);
document.getElementById('translate-to-russian').addEventListener('click', languages.ru);

window.addEventListener('load', () => {
	const lang = localStorage.getItem('language') || 'en';
	if (lang === 'ru') {
		movingRight();
	} else {
		movingLeft();
	}
});

function setLanguage(lang) {
	document.cookie = "googtrans=/ru/" + lang;
	window.location.reload();
}

function movingRight() {
	languageButtons.classList.add('lang-switch--active');
}

function movingLeft() {
	languageButtons.classList.remove('lang-switch--active');
}



















// const languageButtons = document.querySelector('.lang-switch');
// const pageLanguage = document.querySelector('html').getAttribute('lang');

// window.addEventListener('load', function () {
// 	const lang = localStorage.getItem('language');
// 	if (lang === 'ru') {
// 		movingRight();
// 	}
// 	if (lang === 'en') {
// 		movingLeft();
// 	}
// });

// document.getElementById('translate-to-english').addEventListener('click', function () {
// 	movingLeft();
// 	setLanguage('en');
// 	localStorage.setItem("language", "en");
// });

// document.getElementById('translate-to-russian').addEventListener('click', function () {
// 	movingRight();
// 	setLanguage('ru');
// 	localStorage.setItem("language", "ru");
// });

// function setLanguage(lang) {
// 	// const googleTranslateConfig = {
// 	// 	lang: lang,
// 	// };
// 	document.cookie = "googtrans=/ru/" + lang;
// 	window.location.reload();
// }

// function movingRight() {
// 	languageButtons.classList.add('lang-switch--active');
// }
// function movingLeft() {
// 	languageButtons.classList.remove('lang-switch--active');
// }