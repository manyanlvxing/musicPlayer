import axios from "axios";

axios.defaults.baseURL = 'http://182.254.152.195:3000'

export function getBanner() {
    return axios.get('/banner?type=0');
}