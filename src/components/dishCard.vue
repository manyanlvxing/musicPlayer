<template>
  <li>
    <img class="dishCard" :src="imgUrl" alt="图片加载失败" />
    <a href="" class="maskA mask-cover"></a>
    <p class="albumName">{{ albumName }}</p>
    <p class="artistName">{{ artistName }}</p>
  </li>
</template>

<script>
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
  },
};
</script>

<style>
.dishCard {
  width: 100px;
  height: 100px;
}

li {
  float: left;
  list-style: none;
  display: block;
  margin: 0 11px;
  position: relative;
  width: 118px;
  height: 150px;
  text-align: start;
}

.maskA {
  position: absolute;
  width: 118px;
  height: 100px;
  left: 0;
  top: 0;
}

.albumName {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif ;
}
.artistName {
  font-size: 12px;
  color: rgb(102, 102, 102);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif ;
}
</style>