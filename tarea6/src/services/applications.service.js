import axios from "axios";

const baseURL = "http://170.239.85.65:3000/jobs/";

export function jobApps(id) {
  return axios.get(`${baseURL}${id}/applications`);
}
