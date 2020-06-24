import axios from 'axios'

const service = axios.create({
    baseURL: 'https://reqres.in/api',
});

export function getUsers(params) {
    return service.get("/users", {
        params: params
    })
}

export function getUser(id) {
    return service.get("/users/" + id)
}