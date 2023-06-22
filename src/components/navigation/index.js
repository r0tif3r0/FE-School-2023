import Img from '@/assets/images/user-avatar.png';

export function createNavBar() {
  return `<nav class="navbar">
    <div class="navbar__container">
      <button class="button navbar__item active" type="button">Проекты</button>
      <button class="button navbar__item" type="button">Задачи</button>
      <button class="button navbar__item" type="button">Пользователи</button>
      <div class="dropdown">
        <button class="button navbar__user-button" type="button">
          <img class="mini-avatar" src=${Img} alt="Avatar">
          <svg class="arrow-down">
            <use xlink:href="#arrow-down"/>
          </svg>
        </button>
        <div class="dropdown__content">
          <a href="#">Профиль</a>
          <a href="#">Выход</a>
        </div>
      </div>  
    </div>
  </nav>`
}