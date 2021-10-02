import axios from "axios";

const axiosConfig = {};

const axiosInstance = axios.create(axiosConfig);

export const get = axiosInstance.get;
