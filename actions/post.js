import CONFIG from "../helpers/config";

export const getPost = async () => {
  try {
    const response = await fetch(`${CONFIG.API_URL}/posts`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const addPost = async data => {
  try {
    const response = await fetch(`${CONFIG.API_URL}/post`, {
      method: "POST",
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

export const reactToPost = async (data, postId) => {
  try {
    const response = await fetch(`${CONFIG.API_URL}/post/react/${postId}`, {
      method: "PUT",
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};
