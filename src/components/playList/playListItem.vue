<template>
  <div class="playListItem">
    <img :src="playListInfo.picUrl" alt="" />
    <a href="" class="playListItemBg"></a>
    <div class="bottom">
      <div class="icon-all-one"></div>
      <span>{{ playCount }}</span>
      <div class="icon-all-two"></div>
    </div>
    <div class="playListDes">
      {{ playListInfo.name }}
    </div>
  </div>
</template>

<script>

export default {
  props: ["playListInfo"],
  computed: {
    playCount() {
      return Math.floor(this.playListInfo.playCount / 10000) + "万";
    },
  },
};
</script>

<style scoped>
.playListItem {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 10px 20px;
}

img {
  width: 100%;
  height: 100%;
}

.playListItemBg {
  position: absolute;
  display: block;
  width: 140px;
  height: 140px;
  background-image: url("../../assets/coverall.png");
  left: 0;
  top: 0;
}

.playListDes {
  font-size: 14px;
}

.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 27px;
  background-image: url("../../assets/coverall.png");
  background-position: 0 -537px;
  color: #ccc;
  text-align: left;
  line-height: 28px;
  font-size: 12px;
}

.icon-all-one {
  float: left;
  width: 14px;
  height: 11px;
  background-image: url("../../assets/iconall.png");
  background-position: 0 -24px;
  margin-top: 8px;
  margin-left: 5px;
  margin-right: 7px;
}

.icon-all-two {
  float: right;
  width: 16px;
  height: 17px;
  background-image: url("../../assets/iconall.png");
  background-position: 0 0;
  margin-top: 6px;
  margin-right: 5px;
}
</style>