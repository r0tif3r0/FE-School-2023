export const url = "http://45.12.239.156:8081/api";
export let myToken;


export const checkRequest = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(res.status)
  }
}

const saveToken = (token) => {
  myToken = token
}

export const getToken = () => {
  
  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: "markov.k",
      password: "jc63fk"
    })
  })
  .then(res => checkRequest(res))
  .then(data => {
    saveToken(data.token);
  })
  .catch(err => {
    console.log('ERROR', err);
  })
}