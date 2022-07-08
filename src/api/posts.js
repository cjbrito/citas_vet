const API = import.meta.env.VITE_APP_API || "http://localhost:3005";


export const getPostById = async (postId) => {
  const data = await fetch(`${API}/posts/${postId}`);
  return await data.json();
};

export const getPosts = async () => {
  const data = await fetch(`${API}/posts`);
  return await data.json();
};

export const createNewPost = async (post) => {
  const data = await fetch(`${API}/posts`, post);
  return await data.json();
};