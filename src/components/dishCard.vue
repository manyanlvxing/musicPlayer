<template>
  <li>
    <img class="dishCard" :src="imgUrl" alt="图片加载失败" />
    <a href="" class="maskA mask-cover"></a>
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
  },
};
</script>

<style>
.dishCard {
  width: 100px;
  height: 100px;
  opacity: 0;
}

li {
  list-style: none;
  display: inline;
  margin: 0 20px;
  position: relative;
  width: 118px;
  height: 100px;
}

.maskA {
  position: absolute;
  width: 118px;
  height: 100px;
  left: 0;
  top: 0;
}
</style>