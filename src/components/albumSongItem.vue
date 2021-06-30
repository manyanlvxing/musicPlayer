<template>
  <li class="songLi">
    <div class="small span-index">{{ index + 1 }}</div>
    <div class="small song-name">{{ songInfo.name }}</div>
    <div class="small song-time">{{ songTime }}</div>
    <div class="small artist-name">{{ songInfo.ar[0].name }}</div>
  </li>
</template>

<script>
import { getSongDetail } from "../api/api";
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
};
</script>

<style>
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
</style>