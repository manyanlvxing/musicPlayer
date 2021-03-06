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

export function getAlbumComment(id) {
    return axios.get(`/comment/album?id=${id}`);
}

//推荐歌单
export function getPlayerList(amount = 30) {
    return axios.get(`/personalized?limit=${amount}`);
}

export function getPlayListDetail(id) {
    return axios.get(`/playlist/detail?id=${id}`);
}

export function getPlayListComment(id) {
    return axios.get(`/comment/playlist?id=${id}`);
}

export function getHotDishes() {
    return axios.get(`/top/album?offset=0&limit=10&year=2021&month=7&type=hot`);
}


export function getAllNewDishes(num) {
    return axios.get(`/album/new?area=ALL&limit=${num}`);
}

export function getTopPlayList(amount = 35) {
    return axios.get(`/top/playlist?limit=${amount}`);
}

export function getLyric(id) {
    return axios.get(`/lyric?id=${id}`);
}

export function getMusicComment(id, amount = 20) {
    return axios.get(`/comment/music?id=${id}&limit=${amount}`);
}