import { createProjectByXML, createProjectByFetch, createProjectByAxios, createTaskByXML, createTaskByFetch, createTaskByAxios } from "@/js/api/createMethods.js";
import { getProjectsByXML, getProjectsByFetch, getProjectsByAxios, getTasksByXML, getTasksByFetch, getTasksByAxios } from "@/js/api/getMethods.js";
import { editProjectByXML, editProjectByFetch, editProjectByAxios, editTaskByXML, editTaskByFetch, editTaskByAxios } from "@/js/api/editMethods.js";
import { deleteProjectByXML, deleteProjectByFetch, deleteProjectByAxios, deleteTaskByXML, deleteTaskByFetch, deleteTaskByAxios } from "@/js/api/deleteMethods.js";

const ProjectId = '649415b315cd6d1fa8ff7f7d';
const TaskId = '6494160e15cd6d1fa8ff7faf';

export const requestButtonsHandling = (elem) => {
  switch(elem.id) {
    case 'CXML':
      elem.closest('.plug.projects') ? createProjectByXML() : createTaskByXML();
      break;
    case 'CFetch':
      elem.closest('.plug.projects') ? createProjectByFetch() : createTaskByFetch();
      break;
    case 'CAxios':
      elem.closest('.plug.projects') ? createProjectByAxios() : createTaskByAxios();
      break;
    case 'GXML':
      elem.closest('.plug.projects') ? getProjectsByXML() : getTasksByXML();
      break;
    case 'GFetch':
      elem.closest('.plug.projects') ? getProjectsByFetch() : getTasksByFetch();
      break;
    case 'GAxios':
      elem.closest('.plug.projects') ? getProjectsByAxios() : getTasksByAxios();
      break;
    case 'EXML':
      elem.closest('.plug.projects') ? editProjectByXML() : editTaskByXML();
      break;
    case 'EFetch':
      elem.closest('.plug.projects') ? editProjectByFetch() : editTaskByFetch();
      break;
    case 'EAxios':
      elem.closest('.plug.projects') ? editProjectByAxios() : editTaskByAxios();
      break;
    case 'DXML':
      elem.closest('.plug.projects') ? deleteProjectByXML(ProjectId) : deleteTaskByXML(TaskId);
      break;
    case 'DFetch':
      elem.closest('.plug.projects') ? deleteProjectByFetch(ProjectId) : deleteTaskByFetch(TaskId);
      break;
    case 'DAxios':
      elem.closest('.plug.projects') ? deleteProjectByAxios(ProjectId) : deleteTaskByAxios(TaskId);
      break;
  }
}