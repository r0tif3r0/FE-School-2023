export const closeDropDowns = (target) => {
  const dropDowns = document.querySelectorAll('.dropdown__content');

  if (target.closest('.dropdown') === null) {
    dropDowns.forEach(el => {
      el.classList.remove('show');
    });
  }
}