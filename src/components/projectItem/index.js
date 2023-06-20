export function createProjectItem() {
  return `<div class="wrapper">
    <div class="item project-item">
      <div class="item__container">
        <p class="item__name">Название</p>
        <div class="item__description">
          <span class="create-info">
            <span class="item-num">#1</span>
            <span class="modify-info">Иванов И.И. создал 1 час назад</span>
          </span>
          <span class="modify-info">Баранов В.В. изменил 1 минуту назад</span>
        </div>
      </div>
      <div class="dropdown">
        <button class="button item__button project-item__button" type="button">
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