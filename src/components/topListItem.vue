<template>
  <ul class="top-list-ul">
    <li class="small clear-fix" v-for="(val, index) in songsInfo" :key="index">
      <div>{{ index + 1 }}</div>
      <div>{{ val.data.songs[0].name }}</div>
      <div class="control">
        <span
          @click="clickSong(val)"
          class="top-list-play iconfont icon-play"
        ></span>
      </div>
    </li>
  </ul>
</template>

<script>
import { getSongDetail, getPlayerListDetail } from "../api/api";

export default {
  props: ["topListInfo"],
  data() {
    return {
      trackIds: [],
      songsInfo: [],
    };
  },
  created() {
    getPlayerListDetail(this.topListInfo.id).then((res) => {
      this.trackIds = res.data.playlist.trackIds.slice(0, 10);

      this.trackIds.forEach((val) => {
        getSongDetail(val.id).then((res) => {
          this.songsInfo.push(res);
        });
      });

      //   let map = this.trackIds.map((val) => getSongDetail(val.id));

      //   Promise.all(map).then((res) => {
      //     this.songsInfo = res;
      //     console.log(this.songsInfo);
      //   });
    });
  },
  methods: {
    clickSong(songInfo) {
      this.$store.commit(
        "setCurrPlayingInfo",
        `https://music.163.com/song/media/outer/url?id=${songInfo.data.songs[0].id}.mp3`
      );

      this.$store.commit("setSongInfo", songInfo.data.songs[0]);
    },
  },
};
</script>

<style scoped>
@import url("../../css/iconfont.css");

.top-list-ul {
  float: left;
  width: 240px;
  text-align: start;
  margin: 0 1px;
}

.top-list-ul li {
  position: relative;
  width: 100%;
  height: 20px;
  line-height: 20px;
}
.top-list-ul li div {
  float: left;
}

.top-list-ul li div:nth-child(1) {
  width: 20px;
  padding: 0 5px 0px 20px;
}

.control {
  position: absolute;
  right: 0px;

  top: 0px;

  /* border: 1px solid green; */
}

/* .top-list-ul li:hover {
  visibility: visible;
} */

.top-list-play {
  font-size: 25px;
}
</style>