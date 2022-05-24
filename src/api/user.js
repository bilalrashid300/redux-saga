const API = "https://jsonplaceholder.typicode.com/users";

export const getUserAPI = () => {
    console.log('response')
    return fetch(API, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
      .catch((error) => {throw error})
}