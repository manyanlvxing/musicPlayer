import axios from "axios";

axios.defaults.baseURL = 'http://182.254.152.195:3000'

export function getBanner() {
    return axios.get('/banner?type=0');
}

export function getNewDishs() {
    return axios.get('/album/newest')
}

export function getTopDetail() {
    return axios.get('/toplist');
}

export function getAlbumDetail(id) {
    return axios.get(`/album?id=${id}`);
}

export function getSongDetail(id) {
    return axios.get(`/song/detail?ids=${id}`);
}

export function getSongUrl(id) {
    return axios.get(`/song/url?id=${id}`);
}

export function getPlayerListDetail(id) {
    return axios.get(`/playlist/detail?id=${id}`);
}