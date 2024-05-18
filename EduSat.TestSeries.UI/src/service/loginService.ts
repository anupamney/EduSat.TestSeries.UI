import axios, { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { baseURL } from "../utils/constants";

export const login = async (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(baseURL + "Auth/login", data, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    console.log("login successful:", response.data);
    window.sessionStorage.setItem("authToken", response.data.token);
    window.sessionStorage.setItem(
      "refeshAuthToken",
      response.data.refreshToken
    );
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    axiosError?.response?.data?.errors?.map((error: string) => {
      enqueueSnackbar(error, { variant: "error" });
    });
  }
};
export const register = async (email: string, password: string) => {
  const data = {
    email: email,
    username: email,
    password: password,
  };

  try {
    const response = await axios.post(baseURL + "Auth/register", data, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    window.sessionStorage.setItem("authToken", response.data.token);
    window.sessionStorage.setItem(
      "refeshAuthToken",
      response.data.refreshToken
    );
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    axiosError?.response?.data?.errors?.map((error: string) => {
      enqueueSnackbar(error, { variant: "error" });
    });
  }
};
