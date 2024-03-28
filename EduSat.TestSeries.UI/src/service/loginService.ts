import axios from "axios";

export const login = async (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(
      "https://localhost:32768/api/Auth/login",
      data,
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("login successful:", response.data);
    window.sessionStorage.setItem("authToken", response.data.token);
    window.sessionStorage.setItem(
      "refeshAuthToken",
      response.data.refreshToken
    );
    return response;
    // Handle success response
  } catch (error) {
    console.error("Registration failed:", error);
    // Handle error response
  }
};
export const register = async (email: string, password: string) => {
  const data = {
    email: email,
    username: email,
    password: password,
  };

  try {
    const response = await axios.post(
      "https://localhost:32768/api/Auth/register",
      data,
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Registration successful:", response.data);
    window.sessionStorage.setItem("authToken", response.data.token);
    window.sessionStorage.setItem(
      "refeshAuthToken",
      response.data.refreshToken
    );
    return response;
    // Handle success response
  } catch (error) {
    console.error("Registration failed:", error);
    // Handle error response
  }
};
