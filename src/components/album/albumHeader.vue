<template>
  <div>
    <div class="ablumheader">
      <loading v-if="albumInfo == null"></loading>
      <div class="imgContainer" v-if="albumInfo != null">
        <img class="ablumImg" :src="albumPicUrl" alt="图片加载失败" />
        <span class="spanCover span-cover"></span>
      </div>

      <div class="album-info" v-if="albumInfo != null">
        <div>
          <div class="album-icon-type"></div>
          <p class="info-name">{{ this.albumInfo.name }}</p>
        </div>
        <p class="info-artist">
          歌手：&nbsp;&nbsp;<span>{{ this.albumInfo.artist.name }}</span>
        </p>
        <p class="info-date">发行时间：&nbsp;&nbsp;{{ publishTime }}</p>
        <p class="info-comany">
          发行公司：&nbsp;&nbsp;{{ this.albumInfo.company }}
        </p>
      </div>
    </div>

    <div class="album-des" v-if="albumInfo != null">
      <h3>专辑介绍:</h3>
      <p
        v-for="(val, index) in desList"
        :key="index"
        v-show="index < lineNum || (index >= lineNum && !isHide)"
      >
        {{ val }}
      </p>
      <div class="spread-content" v-show="desList.length > lineNum">
        <span @click="clickSpread">{{ isHide ? "展开" : "收回" }}</span>
        <div @click="clickSpread" :class="iconClass"></div>
      </div>
      <!-- <p style="white-space: pre-line">
        {{ desList }}
      </p> -->
    </div>
  </div>
</template>

<script>
import loading from "../common/loading.vue";

export default {
  data() {
    return {
      isHide: true,
      lineNum: 6,
    };
  },
  props: {
    albumInfo: Object,
  },
  components: {
    loading,
  },
  computed: {
    albumPicUrl() {
      return this.albumInfo.blurPicUrl;
    },
    publishTime() {
      return new Date(this.albumInfo.publishTime)
        .toLocaleDateString()
        .replaceAll("/", "-");
    },
    desList() {
      return this.albumInfo.description.split("\n").filter((val) => val != "");
    },
    iconClass() {
      return {
        "icon-spread": this.isHide,
        "icon-back": !this.isHide,
      };
    },
  },
  methods: {
    clickSpread() {
      this.isHide = !this.isHide;
    },
  },
};
</script>

<style scoped>
.ablumheader {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 640px;
  height: 200px;
  margin-bottom: 15px;
}

.ablumImg {
  width: 177px;
  height: 177px;
}

.imgContainer {
  width: 177px;
  height: 177px;
  position: relative;
  margin-right: 50px;
}

.spanCover {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 209px;
  height: 177px;
}

.album-info {
  width: 450px;
  height: 177px;
  text-align: start;
  font-size: 12px;
  color: rgb(102, 102, 102);
}

.album-info p {
  margin-top: 10px;
}

.des-p {
  padding-left: 10px;
  margin: 5px 0;
}

.album-des {
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
}

.album-des p {
  line-height: 24px;
  text-indent: 24px;
  margin-top: 4px;
  color: #666;
}

.info-name {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: rgb(51, 51, 51);
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
  justify-content: flex-end;
  align-items: center;
  color: #0c73c2;
}

.album-icon-type {
  float: left;
  background-image: url("../../assets/icon.png");
  background-position: 0 -186px;
  width: 54px;
  height: 24px;
  margin-right: 10px;
}

.info-artist span {
  color: #0c73c2;
}
</style>