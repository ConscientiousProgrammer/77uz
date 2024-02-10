import axios from "axios";
import config from "../config/index";

export const storeInstance = axios.create({
    baseURL: config.Server_Url + '/store',
})
