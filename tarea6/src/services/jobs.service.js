import axios from "axios";

const baseURL = "http://170.239.85.65:3000/jobs";

export function listJobs() {
  return axios.get(baseURL);
}

export function jobDetails(id) {
  return axios.get(`${baseURL}/${id}`);
}
