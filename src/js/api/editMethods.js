import axios from "axios";
import { url, myToken, checkRequest } from "@/js/api/index.js";

const editProject = {
  _id: '649415b315cd6d1fa8ff7f7d',
  name: 'NewName',
  code: 'NewCode'
};

const editTask = {
  _id: '6494160e15cd6d1fa8ff7faf',
  name: 'NewName',
  description: 'NewDescription'
}

export const editProjectByXML = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${url}/projects`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${myToken}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log('ERROR', xhr.status)
    } else {
      console.log(xhr.response)
    }
  }
  xhr.onerror = () => {
    console.log(xhr.response)
  }
  xhr.send(JSON.stringify(editProject));
}

export const editProjectByFetch = () => {
  fetch(`${url}/projects`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editProject)
  })
  .then(res => checkRequest(res))
  .then(data => {
    console.log(JSON.stringify(data))
  })
  .catch(err => {
    console.log("ERROR", err)
  })
}

export const editProjectByAxios = () => {
  axios.put(`${url}/projects`, editProject, {
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    console.log(JSON.stringify(res.data))
  })
  .catch(err => {
    console.log("ERROR", err.response.status)
  })
}

export const editTaskByXML = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${url}/tasks`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("authorization", `Bearer ${myToken}`);
  xhr.onload = () => {
    if (xhr.status >= 400) {
      console.log('ERROR', xhr.status)
    } else {
      console.log(xhr.response)
    }
  }
  xhr.onerror = () => {
    console.log(xhr.response)
  }
  xhr.send(JSON.stringify(editTask));
}

export const editTaskByFetch = () => {
  fetch(`${url}/tasks`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editTask)
  })
  .then(res => checkRequest(res))
  .then(data => {
    console.log(JSON.stringify(data))
  })
  .catch(err => {
    console.log("ERROR", err)
  })
}

export const editTaskByAxios = () => {
  axios.put(`${url}/tasks`, editTask, {
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    }
  })
  .then(res => {
    console.log(JSON.stringify(res.data))
  })
  .catch(err => {
    console.log("ERROR", err.response.status)
  })
}