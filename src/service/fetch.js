
const API_URL = 'http://localhost:7891/api/v1/'
export const apiFetch = (path, method, body) => {
  return fetch(`${API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'failed to post to API';
      return json;
    });
};