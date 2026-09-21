(function () {
	const iconMenu = document.querySelector('.menu__icon');
	const menu = document.querySelector('.header__menu');
	const menuLinks = document.querySelectorAll('.menu__link');

	iconMenu.addEventListener('click', (e) => {
		e.stopPropagation();
		iconMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
	});

	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', () => {
			iconMenu.classList.remove('_active');
			menu.classList.remove('_active');
		});
	}
})();
