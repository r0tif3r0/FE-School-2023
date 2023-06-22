import { createNavBar } from "@/components/navigation/index.js";
import { createEmptyProjects } from "@/components/emptyProjects/index.js";
import { createProjectItem } from "@/components/projectItem/index.js";
import { createTaskItem } from "@/components/taskItem/index.js";
import { createEmptyContainer } from "@/components/container/index.js";
import { createRequestButtons } from "@/components/requestButtons/index.js";

import { changeNavbarItem } from "@/js/changeNavbarItem.js";
import { closeDropDowns } from "@/js/closeDropDowns.js";
import { changeDropDowns } from "@/js/changeDropDowns.js";
import { getToken } from "@/js/api/index.js";
import { requestButtonsHandling } from "@/js/requestButtonsHandling.js";
import "@/scss/index.scss";
import "@/js/register.js";

function initApp() {
  const app = document.querySelector('.app');
  const navBar = createNavBar();
  const container = createEmptyContainer();
  const requestButtons = createRequestButtons();
  app.insertAdjacentHTML('afterbegin', container);
  app.insertAdjacentHTML('afterbegin', navBar);

  const cont = document.querySelector('.plug');
  cont.insertAdjacentHTML('afterbegin', requestButtons);
  cont.classList.add('projects');

}

initApp();
getToken();

document.addEventListener ('click', evt => {
  evt.preventDefault();
  closeDropDowns(evt.target);
  const elem = evt.target.closest('button');
  if (elem !== null) {
    changeDropDowns(evt.target);
    if (evt.target.closest('.navbar') !== null) {
      changeNavbarItem(elem);
    }
    if (evt.target.closest('.request-buttons')){
      requestButtonsHandling(evt.target);
    }
  }
})