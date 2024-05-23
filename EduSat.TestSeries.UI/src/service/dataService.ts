import axios, { AxiosError } from "axios";
import { ISchool } from "../Models/ISchool";
import { baseURL } from "../utils/constants";
import { IScholarshipDetails } from "../Models/IScholarshipDetails";
import { ITeacher } from "../Models/ITeacher";
import { IPaymentDetails } from "../Models/IPaymentDetails";

export const setDefaultHeaders = (token: string | null | undefined) => {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
};

export const setAuthHeader = async () => {
  if (!axios.defaults.headers["Authorization"]) {
    const token = await fetchAuthToken();

    setDefaultHeaders(token);
  }
};

export const fetchAuthToken = async () => {
  if (window.sessionStorage.getItem("authToken")) {
    const token = window.sessionStorage.getItem("authToken");

    return token;
  }
};

export const fetchRefreshToken = async () => {
  if (window.sessionStorage.getItem("refreshToken")) {
    const token = window.sessionStorage.getItem("refreshToken");

    return token;
  }
};

export const removeAuthToken = () => {
  window.sessionStorage.removeItem("authToken");
};

export const removeRefreshToken = () => {
  window.sessionStorage.removeItem("refreshToken");
};

export const addSchool = async (school: ISchool) => {
  setAuthHeader();
  try {
    const response = await axios.post(baseURL + "Schools", school, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};

export const getSchools = async () => {
  setAuthHeader();
  try {
    const response = await axios.get(baseURL + "Schools", {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};

export const getTeachers = async () => {
  setAuthHeader();
  try {
    const response = await axios.get(baseURL + "Teachers", {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};

export const addTeacher = async (teacher: ITeacher) => {
  setAuthHeader();
  try {
    const response = await axios.post(baseURL + "Teachers", teacher, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};

export const getClasses = async () => {
  setAuthHeader();
  try {
    const response = await axios.get(baseURL + "Classes", {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};

export const addScholarshipDetails = async (
  scholarshipDetails: IScholarshipDetails
) => {
  setAuthHeader();
  try {
    const response = await axios.post(
      baseURL + "Scholarship",
      scholarshipDetails,
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};

export const addPaymentDetails = async (paymentDetails: IPaymentDetails) => {
  setAuthHeader();
  try {
    const response = await axios.post(baseURL + "Payment", paymentDetails, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};

export const getSchoolList = async () => {
  setAuthHeader();
  try {
    const response = await axios.get(baseURL + "Reports", {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};
