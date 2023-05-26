import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

export const createUser = (email, password) => axios.post(`${baseURL}/auth/sign-up`, { email, password });

export const createPost = (title, content) => {
  const sessionToken = localStorage.getItem('sessionToken');
  return axios.post(
    `${baseURL}/post/create`,
    { title, content },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionToken}`
      }
    }
  );
};
export const postsList = () => axios.get(`${baseURL}/post/all?limit=10&offset=0`);

export const getPostId = postId => axios.get(`${baseURL}/post/?id=${postId}`);

export const updatePost = post => {
  const sessionToken = localStorage.getItem('sessionToken');
  return axios.put(`${baseURL}/post/update`, post, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionToken}`
    }
  });
};
