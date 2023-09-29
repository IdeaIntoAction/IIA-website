import axios from 'axios';

const baseURL = 'http://localhost:8080';

// export const createUser = (email, password) => axios.post(`${baseURL}/auth/sign-up`, { email, password });

// export const createPost = (title, content) => {
//   const sessionToken = localStorage.getItem('sessionToken');
//   return axios.post(
//     `${baseURL}/post/create`,
//     { title, content },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${sessionToken}`
//       }
//     }
//   );
// };
export const parserList = () => axios.get(`${baseURL}/api/parser/all?limit=10&cursor=0`);

// export const getPostId = postId => axios.get(`${baseURL}/post/?id=${postId}`);

// export const updatePost = post => {
//   const sessionToken = localStorage.getItem('sessionToken');
//   return axios.put(`${baseURL}/post/update`, post, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${sessionToken}`
//     }
//   });
// };