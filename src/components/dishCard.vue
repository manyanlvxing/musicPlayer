<template>
  <li>
    <div class="disCardContainer">
      <img class="dishCard" :src="imgUrl" alt="图片加载失败" />
      <a class="maskA mask-cover" @click.prevent="onClickDish"></a>
      <p class="albumName">{{ albumName }}</p>
      <p class="artistName">{{ artistName }}</p>
    </div>
  </li>
</template>

<script>
import { getAlbumDetail } from "../api/api";

export default {
  props: {
    info: Object,
  },
  created() {
    console.log(this.info);
  },
  computed: {
    imgUrl() {
      return this.info.blurPicUrl;
    },
    albumName() {
      return this.info.name;
    },
    artistName() {
      return this.info.artist.name;
    },
    ablumID() {
      return this.info.id;
    },
    ablumUrl() {
      return `/ablum?id=${this.info.id}`;
    },
  },
  methods: {
    clickAblumDetail() {
      // console.log("clickAblumDetail", this.info);

      getAlbumDetail(this.info.id).then((res) => console.log(res));
    },
    onClickDish() {
      this.$router.push({
        path: "/ablum",
        query: {
          id: this.info.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.disCardContainer {
  height: 150px;
  margin-top: 30px;
}

.dishCard {
  width: 100px;
  height: 100px;
  /* margin-top: 10px; */
}

li {
  float: left;
  list-style: none;
  display: block;
  width: 118px;
  text-align: start;
  top: 0;
  position: relative;
}

.maskA {
  position: absolute;
  width: 118px;
  height: 100px;
  left: 0;
  top: 30px;
}

.albumName {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
.artistName {
  font-size: 12px;
  color: rgb(102, 102, 102);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
</style>