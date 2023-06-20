import Img from '@/assets/images/executor-avatar.png';

export function createTaskItem() {
  return `<div class="wrapper">
  <div class="item task-item">
    <div class="item__container">
      <div class="task-item__intro">
        <p class="item__name">Название</p>
        <img class="mini-avatar task-item__img" src=${Img} alt="Executor">
      </div>
      <div class="item__description">
        <span class="create-info">
          <span class="item-num">#1</span>
          <span class="modify-info">Иванов И.И. создал 1 час назад</span>
          <span class="item-status draft">Черновик</span>
        </span>
        <span class="modify-info">Баранов В.В. изменил 1 минуту назад</span>
      </div>
    </div>
    <div class="dropdown">
      <button class="button item__button task-item__button" type="button">
        <svg class="dots">
          <use xlink:href="#dots"/>
        </svg>      
      </button>
      <div class="dropdown__content">
        <a href="#">Редактировать</a>
        <a class="error" href="#">Удалить</a>
      </div>
    </div> 
  </div>
</div>`
}