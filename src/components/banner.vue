<template>
  <img :src="currUrl" alt="图片加载失败" />
</template>

<script>
export default {
  data() {
    return {
      currIndex: 0,
    };
  },
  props: ["imgUrls"],
  methods: {
    schedule() {
      setTimeout(() => {
        this.changeImg();
      }, 3000);
    },
    changeImg() {
      this.currIndex = ++this.currIndex % this.imgUrls.length;
      this.schedule();
    },
  },
  computed: {
    currUrl() {
      return this.imgUrls[this.currIndex].imageUrl;
    },
  },
  created() {
    this.schedule();
  },
};
</script>

<style>
img {
  width: 100%;
  height: 250px;
  margin-top: 8px;

}
</style>