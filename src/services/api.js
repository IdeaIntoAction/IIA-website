import axios from "axios";

const baseURL = 'http://localhost:8080/api'

export const createUser = (email, password) => {
    return axios.post(`${baseURL}/auth/sign-up`,{email, password});
};
export const createPost = (title, content) => {
    const sessionToken = localStorage.getItem('sessionToken')
    return axios.post(`${baseURL}/post/create`, {title, content}, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionToken}`
    }});
};