export const changeNavbarItem = (elem) => {
  const navbarItems = document.querySelectorAll('.navbar__container .button');
  
  if (!elem.classList.contains('active')) {
    navbarItems.forEach(el => {
      el.classList.remove('active');
    });
    elem.classList.add('active');
  }
}