<template>
  <li class="songLi">
    <div class="small span-index">{{ index + 1 }}</div>
    <div class="small song-name">{{ songInfo.name }}</div>
    <div class="small song-time">{{ songTime }}</div>
    <div class="small artist-name">{{ songInfo.ar[0].name }}</div>
    <span class="play-icon iconfont icon-play" @click="clickPlay"></span>
  </li>
</template>

<script>
import { getSongDetail, getSongUrl } from "../api/api";
import { formatTime } from "../utils";

export default {
  props: ["songInfo", "index"],
  created() {
    console.log(this.songInfo);

    getSongDetail(this.songInfo.id).then((val) => {
      console.log(val);
    });
  },
  computed: {
    songTime() {
      return formatTime(new Date(this.songInfo.dt), "mm:ss");
    },
  },
  methods: {
    clickPlay() {
      getSongUrl(this.songInfo.id).then((res) => {
        console.log(res);
        // this.$store.commit('setCurrPlayingInfo',res.data.data[0].url)
        this.$store.commit(
          "setCurrPlayingInfo",
          `https://music.163.com/song/media/outer/url?id=${this.songInfo.id}.mp3`
        );

        this.$store.commit("setSongInfo", this.songInfo);
      });
    },
  },
};
</script>

<style scoped>
@import url("../../css/iconfont.css");

.songLi {
  overflow: hidden;
  height: 32px;
}

.span-index {
  float: left;
  width: 100px;
  text-align: center;
  height: 32px;
  line-height: 32px;
}
.song-name {
  float: left;
  width: 380px;
  text-align: start;
  height: 32px;
  line-height: 32px;
}

.song-time {
  float: left;
  width: 80px;
  text-align: start;
  height: 32px;
  line-height: 32px;
}

.artist-name {
  float: left;
  width: 100px;
  text-align: center;
  vertical-align: middle;
  height: 32px;
  line-height: 32px;
}

.play-icon {
  font-size: 25px;
  line-height: 32px;
}
</style>