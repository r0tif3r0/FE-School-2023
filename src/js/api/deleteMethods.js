import axios from "axios";
import { url, myToken, checkRequest } from "@/js/api/index.js";

export const deleteProjectByXML = (id) => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${url}/projects/${id}`);
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
  xhr.send();
}

export const deleteProjectByFetch = (id) => {
  fetch(`${url}/projects/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    }
  })
  .then(res => checkRequest(res))
  .then(data => {
    console.log(JSON.stringify(data))
  })
  .catch(err => {
    console.log("ERROR", err)
  })
}

export const deleteProjectByAxios = (id) => {
  axios.delete(`${url}/projects/${id}`, {
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

export const deleteTaskByXML = (id) => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${url}/tasks/${id}`);
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
  xhr.send();
}

export const deleteTaskByFetch = (id) => {
  fetch(`${url}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json"
    }
  })
  .then(res => checkRequest(res))
  .then(data => {
    console.log(JSON.stringify(data))
  })
  .catch(err => {
    console.log("ERROR", err)
  })
}

export const deleteTaskByAxios = (id) => {
  axios.delete(`${url}/tasks/${id}`, {
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