<template>
  <img :src="currUrl" alt="图片加载失败" :style="{ opacity: customOpacity }" />
</template>

<script>
export default {
  data() {
    return {
      currIndex: 0,
      customOpacity: 1,
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
      this.beforeImgChanged();
    },
    beforeImgChanged() {
      this.playFadeOut(this.onFadeOut.bind(this));
    },
    afterImgChanged() {
      this.playFadeIn();
    },
    onFadeOut() {
      this.currIndex = ++this.currIndex % this.imgUrls.length;
      this.schedule();

      this.afterImgChanged();
    },
    fadeOut(finishcb) {
      this.customOpacity -= 0.02;
      if (this.customOpacity > 0) {
        this.playFadeOut(finishcb);
      } else {
        finishcb && finishcb();
      }
    },
    fadeIn() {
      this.customOpacity += 0.02;
      if (this.customOpacity < 1) {
        this.playFadeIn();
      }
    },
    playFadeOut(finishcb) {
      requestAnimationFrame(this.fadeOut.bind(this, finishcb));
    },
    playFadeIn() {
      requestAnimationFrame(this.fadeIn.bind(this));
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