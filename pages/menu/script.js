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

  const themeBtn = document.querySelector('.theme-btn__container');
  const buttons = themeBtn.querySelectorAll('[data-theme]');

  function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    buttons.forEach((el) => el.classList.toggle('theme-btn_active', el.dataset.theme === theme));
    localStorage.setItem('theme', theme);
  }

  const saved = localStorage.getItem('theme');
  applyTheme(saved);

  themeBtn.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme]');
    if (!btn) return;
    applyTheme(btn.dataset.theme);
  });
})();
