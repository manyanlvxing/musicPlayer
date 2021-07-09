<template>
  <div>
    <transition-group name="fade">
      <img
        v-for="(val, index) in imgUrls"
        :key="val.targetId"
        :src="val.imageUrl"
        alt="图片加载失败"
        v-show="currIndex == index"
        @click="clickBanner(val)"
      />
    </transition-group>
  </div>
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
        this.currIndex = ++this.currIndex % this.imgUrls.length;
        this.schedule();
      }, 3000);
    },
    clickBanner(info) {
      if (info.targetType == 1) {
        console.log("单曲");
      } else {
        this.$router.push({
          path: "/ablum",
          query: {
            id: info.targetId,
          },
        });
      }
    },
  },
  created() {
    this.schedule();
  },
};
</script>

<style scoped>
img {
  position: absolute;
  width: 730px;
  height: 238px;
  left: 0;
  top: 0;
}

div {
  position: relative;
  width: 730px;
  height: 238px;
  overflow: hidden;
}

.fade-enter {
  transform: translateX(730px);
}

.fade-leave-to {
  transform: translateX(-730px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
</style>