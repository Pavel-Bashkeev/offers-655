const burderBtn = document.querySelector('.burger-menu');
const navBox = document.querySelector('.menu');

window.addEventListener('click', (event)=>{
  let target = event.target;

  let itsMenu = target == navBox || navBox.contains(target);
  let itsBurgerBtn = target == burderBtn || burderBtn.contains(target);
  let navBoxOpened = navBox.classList.contains('menu--opened');
  navBoxOpened && !itsMenu && !itsBurgerBtn ? closeMenu() : '';
})
burderBtn.addEventListener('click', () => {
  burderBtn.classList.toggle('burger-menu--visiblle');
  navBox.classList.contains('menu--opened') ? navBox.classList.remove('menu--opened') : navBox.classList.add('menu--opened');
  if (navBox.classList.contains('menu--opened')) {
    setTimeout(() => {
      navBox.style.display = 'block';
    }, 10);
    navBox.classList.add('menu--opened')
  }else{
    closeMenu();
  }
});

navBox.addEventListener('click', (e) => {
  let target = e.target;
  if (!target.classList.contains('menu--opened')) {
    closeMenu();
  }
});

function closeMenu() {
  navBox.classList.remove('menu--opened');
  burderBtn.classList.remove('burger-menu--visiblle');
  setTimeout(() => {
    navBox.style.display = 'none';
  }, 10);
}