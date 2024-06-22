import axios, { AxiosError } from "axios";

import { baseURL } from "../utils/constants";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { ISchoolDetails } from "../Models/ISchoolDetails";

export const setDefaultHeaders = (token: string | null | undefined) => {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
};

export const setAuthHeader = async () => {
  const token = await fetchAuthToken();

  setDefaultHeaders(token);
};

export const fetchAuthToken = async () => {
  if (window.sessionStorage.getItem("authToken")) {
    const token = window.sessionStorage.getItem("authToken");

    return token;
  }
};
export const notify = async (
  selectedSchools: ISchoolDetails[],
  action: string,
  subject: string,
  body: string,
  attachment: File | null
) => {
  const formData = new FormData();

  formData.append("Recipients", JSON.stringify(selectedSchools));
  formData.append("Subject", subject);
  formData.append("Body", body);
  if (attachment) {
    formData.append("Attachment", attachment);
  }
  formData.append("Mode", action);
  enqueueSnackbar("Notifications are being sent", { variant: "default" });
  const response = await sendNotification(formData);
  closeSnackbar();
  if (response) {
    enqueueSnackbar("Notification sent successfully", { variant: "success" });
  } else {
    enqueueSnackbar("Failed to send notification", { variant: "error" });
  }
};

const sendNotification = async (formData: FormData) => {
  setAuthHeader();
  try {
    const response = await axios.post(baseURL + "Notification", formData, {
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(axiosError);
  }
};
