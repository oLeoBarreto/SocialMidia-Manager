import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 2000,
});

Api.defaults.withCredentials = true;

export default Api;