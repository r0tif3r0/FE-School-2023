import axios from "axios";
import { url, myToken, checkRequest } from "@/js/api/index.js";

const project = {
  name: "Name",
  code: "Code"
}

const task = {
  name: "Name",
  description: "Description",
  projectId: "649415b315cd6d1fa8ff7f7d"
}

export const createProjectByXML = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${url}/projects`);
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
  xhr.send(JSON.stringify(project));
}

export const createProjectByFetch = () => {
  fetch(`${url}/projects`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })
  .then(res => checkRequest(res))
  .then(data => {
    console.log(JSON.stringify(data))
  })
  .catch(err => {
    console.log("ERROR", err)
  })
}

export const createProjectByAxios = () => {
  axios.post(`${url}/projects`, project, {
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

export const createTaskByXML = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${url}/tasks`);
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
  xhr.send(JSON.stringify(task));
}

export const createTaskByFetch = () => {
  fetch(`${url}/tasks`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
  .then(res => checkRequest(res))
  .then(data => {
    console.log(JSON.stringify(data))
  })
  .catch(err => {
    console.log("ERROR", err)
  })
}

export const createTaskByAxios = () => {
  axios.post(`${url}/tasks`, task, {
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