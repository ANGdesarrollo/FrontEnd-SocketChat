import Axios from "axios";
import { API_URL } from "../../../../../Chat/Front-End-2/src/config/configAPI.js";

Axios.defaults.withCredentials = true;

export const chatApi = Axios.create({
    baseURL: API_URL
});
