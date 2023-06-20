export const changeDropDowns = (target) => {
  const dropConts = document.querySelectorAll('.dropdown__content');
  const dropDown = target.closest('.dropdown');

  if (dropDown !== null) {
    const currentContent = dropDown.querySelector('.dropdown__content');

    if (currentContent.classList.contains('show')) {
      currentContent.classList.remove('show');
    } else {
      dropConts.forEach(el => {
        el.classList.remove('show');
      });
      currentContent.classList.add('show');
    }
  }
}