<template>
  <tr>
    <td>
      <div class="small span-index">
        <span>{{ index + 1 }}</span>
        <div class="play-icon" @click="clickPlay"></div>
      </div>
    </td>
    <td>
      <div class="small song-name">
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
import { getSongDetail, getSongUrl } from "../../api/api";
import { formatTime } from "../../utils";

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

/* .span-index {
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
} */

.span-index{
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

.play-icon:hover{
  background-position: 0 -128px;
}

</style>