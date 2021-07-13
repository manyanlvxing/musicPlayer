<template>
  <tr>
    <td>
      <div class="small span-index">
        <span>{{ index + 1 }}</span>
        <div class="play-icon" @click="clickPlay"></div>
      </div>
    </td>
    <td>
      <div @click="goToSong" class="small song-name">
        <span>{{ songInfo.name }}</span>
      </div>
    </td>
    <td>
      <div class="small song-time">
        <span>{{ songTime }}</span>
      </div>
    </td>
    <td>
      <div class="small artist-name">
        <span>{{ songInfo.ar[0].name }}</span>
      </div>
      <!-- <span class="play-icon iconfont icon-play" @click="clickPlay"></span> -->
    </td>
  </tr>
</template>

<script>
import { formatTime } from "../../utils";

export default {
  props: ["songInfo", "index"],
  created() {},
  computed: {
    songTime() {
      return formatTime(new Date(this.songInfo.dt), "mm:ss");
    },
  },
  methods: {
    clickPlay() {
      this.$store.commit(
        "setCurrPlayingInfo",
        `https://music.163.com/song/media/outer/url?id=${this.songInfo.id}.mp3`
      );

      this.$store.commit("setSongInfo", this.songInfo);
    },
    goToSong() {
      this.$router.push({
        path: "/songDetail",
        query: {
          id: this.songInfo.id,
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("../../../css/iconfont.css");

.songLi {
  overflow: hidden;
  height: 32px;
}

table tr td {
  padding: 6px 10px;
  line-height: 18px;
  text-align: left;
  color: rgb(51, 51, 51);
}

.span-index {
  position: relative;
}

.play-icon {
  position: absolute;
  width: 17px;
  height: 17px;
  background-image: url("../../assets/table.png");
  background-position: 0 -103px;
  left: 30px;
  top: 0;
}

.play-icon:hover {
  background-position: 0 -128px;
}

.song-name span:hover {
  text-decoration: underline;
}
</style>