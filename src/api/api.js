import axios from "axios";

axios.defaults.baseURL = 'http://182.254.152.195:3000'

export function getBanner() {
    return axios.get('/banner?type=0');
}

export function getNewDishs() {
    return axios.get('/top/album?offset=0&limit=10')
}