const url = "http://localhost:9000";

export const login = async data => {
  try {
    const response = await fetch(`${url}/login`, {
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
    const response = await fetch(`${url}/register`, {
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
