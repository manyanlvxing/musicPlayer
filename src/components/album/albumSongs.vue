<template>
  <div class="songs">
    <!-- <div class="songs-title">
      <span>包含歌曲列表</span>
      <span>{{ albumSongs.length }}首歌</span>
    </div> -->
    <commonTitle title="包含歌曲列表"></commonTitle>
    <div class="li-header">
      <div class="div1"></div>
      <div class="div2">歌曲标题</div>
      <div class="div3">时长</div>
      <div class="div4">歌手</div>
    </div>
    <ul>
      <albumSongItem
        v-for="(info, index) in albumSongs"
        :key="index"
        :index="index"
        :songInfo="info"
      ></albumSongItem>
    </ul>
  </div>
</template>

<script>
import albumSongItem from "./albumSongItem.vue";
import commonTitle from "../commonTitle.vue";

export default {
  props: {
    albumSongs: Array,
  },
  components: {
    albumSongItem,
    commonTitle
  },
};
</script>

<style scoped>
ul {
  border: 1px solid #d9d9d9;
}

ul > li:nth-of-type(odd) {
  background-color: rgb(247, 247, 247);
}
.li-header div {
  font-size: 12px;
  line-height: 40px;
  text-align: start;
  padding-left: 10px;
}

.li-header {
  display: flex;
  height: 40px;
  border: 1px solid rgb(217, 217, 217);
  background-color: rgb(247, 247, 247);
}

.div1 {
  width: 100px;
  border-left: 1px solid lightgray;
}

.div2 {
  width: 400px;
  border-left: 1px solid lightgray;
}

.div3 {
  width: 100px;
  border-left: 1px solid lightgray;
}
.div4 {
  width: 150px;
  border-left: 1px solid lightgray;
}

.songs {
  text-align: start;
}

.songs span:nth-child(1) {
  font-size: 20px;
  color: rgb(51, 51, 51);
  margin-right: 15px;
}

.songs span:nth-child(2) {
  font-size: 12px;
  color: rgb(51, 51, 51);
}

.songs-title {
  height: 40px;
  line-height: 40px;
}
</style>