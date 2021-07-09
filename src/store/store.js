import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 1,
        isPlaying: true,
        currMusic: null,
        currSongInfo: null
    },
    mutations: {
        addCount(state) {
            state.count++;
        },
        changePlayingState(state) {
            state.isPlaying = !state.isPlaying
        },
        setCurrPlayingInfo(state, info) {
            state.currMusic = info;
        },
        setSongInfo(state, info) {
            state.currSongInfo = info;
        }
    },
    getters: {
        picUrl(state) {
            return state.currSongInfo ? state.currSongInfo.al.picUrl : '';
        },
        albumName(state) {
            return state.currSongInfo ? state.currSongInfo.name : "";
        },
        artistName(state) {
            return state.currSongInfo ? state.currSongInfo.ar[0].name : "";
        },
    }

})

