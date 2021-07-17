<template>
  <div class="rankHeader">
    <loading v-if="isLoading"></loading>
    <div class="img-container" v-if="!isLoading">
      <span class="bg">&nbsp;</span>
      <img :src="imgUrl" alt="" />
    </div>
    <div class="des-container" v-if="!isLoading">
      <p>{{ albumName }}</p>
      <p><span class="icon-clock">&nbsp;</span>最近更新：{{ updateTime }}</p>
      <div class="btn-play-container" v-show="false">
        <btnPLay @onClickPlay="onClickPlay" evtName="onClickPlay"></btnPLay>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "../common/loading.vue";
import { formatTime } from "../../utils/utils";

import btnPLay from "../common/btnPlay.vue";

export default {
  props: ["rankInfo", "isLoading"],
  components: {
    loading,
    btnPLay,
  },
  methods: {
    onClickPlay() {
      console.log("onclickplay");
    },
  },
  computed: {
    imgUrl() {
      return this.rankInfo.playlist.coverImgUrl;
    },
    albumName() {
      return this.rankInfo.playlist.name;
    },
    updateTime() {
      return formatTime(
        new Date(this.rankInfo.playlist.trackUpdateTime),
        "M月d日"
      );
    },
  },
};
</script>

<style scoped>
.rankHeader {
  width: 100%;
  overflow: hidden;
}

img {
  width: 150px;
  height: 150px;
  vertical-align: middle;
}

.img-container {
  float: left;
  text-align: left;
  position: relative;
  border: 1px solid #ccc;
  padding: 3px;
}

.des-container {
  float: left;
  padding: 10px 0 0 20px;
  text-align: left;
}

.des-container p:nth-of-type(1) {
  font-size: 20px;
  margin-bottom: 10px;
}

.des-container p:nth-of-type(2) {
  font-size: 12px;
  color: #666;
}

.icon-clock {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url("../../assets/icon.png");
  background-position: -18px -682px;
  margin-right: 5px;
}

.bg {
  width: 150px;
  height: 150px;
  display: block;
  position: absolute;
  background-image: url("../../assets/coverall.png");
  background-position: -230px -380px;
  top: 3px;
  left: 3px;
}

.btn-play {
  float: left;
  background-position: 0 -387px;
  background-image: url("../../assets/button2.png");
  width: 61px;
  height: 31px;
  /* color: white; */
  /* font-size: 20px; */
  /* line-height: 31; */
  /* font-size: 12px; */
  text-align: right;
  color: white;
  font-size: 12px;
  padding-right: 8px;
  padding-top: 6px;
  box-sizing: border-box;
}

.btn-rightHalf {
  float: left;
  background-position: 0 -1588px;
  width: 31px;
  height: 31px;
  background-image: url(~assets/button2.png);
}

.btns {
  position: relative;
  margin-top: 35px;
}

.icon-type-play {
  position: absolute;
  width: 20px;
  height: 18px;
  top: 5px;
  left: 5px;
  background-position: 0 -1622px;
  background-image: url("../../assets/button2.png");
}

.btn-play-container {
  margin-top: 35px;
}
</style>