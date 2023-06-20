import { createNavBar } from "@/components/navigation/index.js";
import { createEmptyProjects } from "@/components/emptyProjects/index.js";
import { createProjectItem } from "@/components/projectItem/index.js";
import { createTaskItem } from "@/components/taskItem/index.js";

import { changeNavbarItem } from "@/js/changeNavbarItem.js";
import { closeDropDowns } from "@/js/closeDropDowns.js";
import { changeDropDowns } from "@/js/changeDropDowns.js";
import "@/scss/index.scss";
import "@/js/register.js";

function initApp() {
  const app = document.querySelector('.app');
  const navBar = createNavBar();
  const emptyProjects = createEmptyProjects();
  const projectItem = createProjectItem();
  const taskItem = createTaskItem();
  app.insertAdjacentHTML('afterbegin', emptyProjects);
  app.insertAdjacentHTML('afterbegin', taskItem);
  app.insertAdjacentHTML('afterbegin', projectItem);
  app.insertAdjacentHTML('afterbegin', navBar);
}

initApp();
document.addEventListener ('click', evt => {
  evt.preventDefault();
  closeDropDowns(evt.target);
  const elem = evt.target.closest('button');
  if (elem !== null) {
    changeDropDowns(evt.target);
    if (evt.target.closest('.navbar') !== null) {
      changeNavbarItem(elem);
    }
  }
})