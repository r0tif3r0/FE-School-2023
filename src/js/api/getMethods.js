import axios from "axios";
import { url, myToken, checkRequest } from "@/js/api/index.js";

export const getProjectsByXML = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${url}/projects/search`);
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
  xhr.send()
}

export const getProjectsByFetch = () => {
  fetch(`${url}/projects/search`, {
    method: "POST",
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

export const getProjectsByAxios = () => {
  axios.post(`${url}/projects/search`, {}, {
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

export const getTasksByXML = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${url}/tasks/search`);
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
  xhr.send()
}

export const getTasksByFetch = () => {
  fetch(`${url}/tasks/search`, {
    method: "POST",
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

export const getTasksByAxios = () => {
  axios.post(`${url}/tasks/search`, {}, {
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