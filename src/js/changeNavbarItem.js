export const changeNavbarItem = (elem) => {
  const navbarItems = document.querySelectorAll('.navbar__container .button');
  const plug = document.querySelector('.plug');
  
  if (!elem.classList.contains('active')) {
    navbarItems.forEach(el => {
      el.classList.remove('active');
    });
    elem.classList.add('active');
    switch (elem.textContent) {
      case ('Проекты'):
        plug.classList.remove('tasks');
        plug.classList.add('projects');
        break;
      case ('Задачи'):
        plug.classList.remove('projects');
        plug.classList.add('tasks');
        break;
    }
  }
}