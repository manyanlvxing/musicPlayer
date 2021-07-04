<template>
  <div>
    <div class="ablumheader">
      <div class="imgContainer">
        <img class="ablumImg" :src="albumPicUrl" alt="图片加载失败" />
        <span class="spanCover span-cover"></span>
      </div>

      <div class="album-info">
        <p>{{ this.albumInfo.name }}</p>
        <p>歌手:{{ this.albumInfo.artist.name }}</p>
        <p>发行时间:{{ publishTime }}</p>
        <p>发行公司:{{ this.albumInfo.company }}</p>
      </div>
    </div>

    <div class="album-des">
      <h3 class="small">专辑介绍:</h3>
      <p
        class="des-p small text-start"
        v-for="(val, index) in desList"
        :key="index"
      >
        {{ val }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    albumInfo: Object,
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
      return this.albumInfo.description.split(" ");
    },
  },
};
</script>

<style scoped>
.ablumheader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 200px;
  border-bottom: 1px solid lightgrey;
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
}

.album-info p {
  margin-top: 10px;
}

.des-p {
  padding-left: 10px;
  margin: 5px 0;
}

.album-des {
  border-bottom: 1px solid lightgrey;
}
</style>