<template>
  <div>
    <loading v-if="songDetail == null"></loading>
    <div class="songDetail" v-if="songDetail != null">
      <div class="imgContainer">
        <img :src="songDetail.al.picUrl" alt="图片加载失败" />
        <span class="circal">&nbsp;</span>
      </div>
      <div class="msg">
        <div class="playListName">
          <div class="icon-type"></div>
          {{ songDetail.name }}
        </div>
        <div class="song-alia">{{ songDetail.alia[0] }}</div>
        <div class="detail-artist dis grey-label">
          歌手：<span class="blue">{{ artistName }}</span>
        </div>
        <div class="detail-album dis grey-label">
          所属专辑：<span class="blue">{{ belongAlbumName }}</span>
        </div>
        <div class="btn-play-control">
          <btnPLay @onclickplay="onclickplay" evtName="onclickplay"></btnPLay>
        </div>
      </div>
      <div class="lysic">
        <p
          v-for="(val, index) in lyrics"
          :key="index"
          v-show="index < 6 || (index >= 6 && !isHide)"
        >
          {{ val || "&nbsp;" }}
        </p>
        <div class="spread-content">
          <span @click="clickSpread">{{ isHide ? "展开" : "收回" }}</span>
          <div @click="clickSpread" :class="iconClass"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "../common/loading.vue";
import btnPLay from "../common/btnPlay.vue";

import { getLyric } from "../../api/api";

export default {
  data() {
    return {
      lyrics: [],
      isHide: true,
    };
  },
  props: ["songDetail"],
  components: {
    loading,
    btnPLay,
  },
  methods: {
    clickSpread() {
      this.isHide = !this.isHide;
    },
    onclickplay() {
        this.$store.commit(
        "setCurrPlayingInfo",
        `https://music.163.com/song/media/outer/url?id=${this.songDetail.id}.mp3`
      );

      this.$store.commit("setSongInfo", this.songDetail);
    },
  },
  created() {
    console.log("header", this.songDetail);
  },
  computed: {
    artistName() {
      return this.songDetail.ar.map((val) => val.name).join("/");
    },
    belongAlbumName() {
      return this.songDetail.al.name;
    },
    iconClass() {
      return {
        "icon-spread": this.isHide,
        "icon-back": !this.isHide,
      };
    },
  },
  watch: {
    songDetail() {
      getLyric(this.songDetail.id).then((res) => {
        // console.log("lysic", oldVal, newVal, res.data);
        // this.lyrics = res.data.lrc.lyric.replace(/(\[.*\])/g, "").split("\n");

        let lyrics = res.data.lrc.lyric.split("\n");

        let tlyics = res.data.tlyric.lyric.split("\n");

        let index = 0;
        for (index; index < lyrics.length; index++) {
          if (lyrics[index] == tlyics[0]) {
            break;
          }
        }

        let temp = lyrics.splice(0, index);

        while (lyrics.length > 0) {
          temp.push(lyrics.shift());
          temp.push(tlyics.shift());
        }

        this.lyrics = temp
          .join("\n")
          .replace(/(\[.*\])/g, "")
          .split("\n");
      });
    },
  },
};
</script>

<style scoped>
img {
  position: absolute;
  width: 130px;
  height: 130px;
  left: 37px;
  top: 38px;
}

.song-alia {
  font-size: 14px;
  padding-left: 60px;
  color: #bababa;
}

.imgContainer {
  float: left;
  position: relative;
  left: 0;
  top: 0;
  width: 206px;
  height: 205px;
}

.circal {
  position: absolute;
  display: inline-block;
  background-image: url("../../assets/coverall.png");
  background-position: -140px -580px;
  width: 206px;
  height: 205px;
  vertical-align: middle;
  left: 0;
  top: 0;
}
.msg {
  float: left;
  width: 400px;
  font-size: 12px;
  text-align: left;
  padding-left: 25px;
}

.creator-avatar {
  width: 35px;
  height: 35px;
}

.playListName {
  font-size: 24px;
  margin-bottom: 15px;
  color: rgb(51, 51, 51);
  font-weight: 400;
}

.icon-type {
  float: left;
  background-image: url("../../assets/icon.png");
  background-position: 0 -463px;
  width: 54px;
  height: 24px;
  margin-right: 10px;
  margin-top: 5px;
}

.detail {
  height: 35px;
}

.detail img {
  vertical-align: middle;
  margin-right: 10px;
}
.detail span {
  vertical-align: middle;
  margin: 0 5px;
}

.control {
  width: 100%;
  height: 40px;
  opacity: 0;
}

.songDetail {
  overflow: hidden;
}

.lysic {
  float: left;
  width: 400px;
  font-size: 12px;
  text-align: left;
  margin-top: 20px;
  color: rgb(51, 51, 51);
  padding-left: 25px;
}

.lysic p {
  margin: 5px 0;
}

.icon-spread {
  background-image: url("../../assets/icon.png");
  background-position: -65px -520px;
  width: 11px;
  height: 8px;
}

.icon-back {
  background-image: url("../../assets/icon.png");
  background-position: -45px -520px;
  width: 11px;
  height: 8px;
}

.spread-content {
  display: flex;
  justify-content: left;
  align-items: center;
  color: #0c73c2;
  margin-top: 10px;
}

.blue {
  color: #0c73c2;
}

.dis {
  margin: 10px 0;
}

.grey-label {
  color: rgb(153, 153, 153);
}
</style>