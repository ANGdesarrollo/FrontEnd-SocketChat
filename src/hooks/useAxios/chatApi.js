import Axios from "axios";
import { API_URL } from "../../config/configAPI.js";

Axios.defaults.withCredentials = true;

export const chatApi = Axios.create({
    baseURL: API_URL
});
