import axios from "axios";

const requestApi = axios.create({
    baseURL: "https://api.opendota.com/api/",
});

export default requestApi;