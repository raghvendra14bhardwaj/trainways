import axios from "axios";

export const authenticateUser = async (userId: string, password: string) => {
  try {
    const backendUrl: string =
      process.env.REACT_APP_BACKEND_URL + "/user/getUser";
    const config = {
      headers: {
        "Content-Type": "application/json", // Set the correct content type
      },
    };
    const data = {
      userId: userId,
      password: password,
    };
    return await axios.post(backendUrl, data, config).then((response) => {
      return { data: response.data.data, status: response.status };
    });
  } catch (e) {
    return e;
  }
};

export const createUser = async (
  userId: string,
  password: string,
  name: string,
  mobile: number,
  email: string
) => {
  try {
    const backendUrl: string = process.env.REACT_APP_BACKEND_URL + "/user";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      userId: userId,
      password: password,
      name: name,
      email: email,
      mobile: mobile,
    };
    return await axios.post(backendUrl, data, config).then((response) => {
      return { data: response.data.data, status: response.status };
    });
  } catch (e) {
    return e;
  }
};
