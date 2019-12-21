import CONFIG from "../helpers/config";

export const login = async data => {
  try {
    const response = await fetch(`${CONFIG.API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    localStorage.setItem("user", JSON.stringify(json.user));
    return json;
  } catch (error) {
    return error;
  }
};

export const register = async data => {
  try {
    const response = await fetch(`${CONFIG.API_URL}/register`, {
      method: "POST",
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    localStorage.setItem("user", JSON.stringify(json.user));
    return json;
  } catch (error) {
    return error;
  }
};

export const getUser = () => localStorage.getItem("user");
