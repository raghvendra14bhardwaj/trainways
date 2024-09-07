import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const fetchStationList = async () => {
  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL + "/stationList";
    return await axios.get(backendUrl, config).then((response) => {
      return { data: response.data.data, status: response.status };
    });
  } catch (e) {
    return e;
  }
};
