<template>
  <div class="redLine" :style="{ width: currWidth }">
    <span>{{ title1 }}</span>
    <span>{{ title2 }}</span>
  </div>
</template>

<script>
export default {
  props: ["title1", "title2", "width"],
  computed: {
    currWidth() {
      return (this.width ? this.width : 638) + "px";
    },
  },
};
</script>

<style scoped>
.redLine {
  width: 638px;
  height: 33px;
  border-bottom: 2px solid #c20c0c;
  text-align: left;
}

.redLine span:nth-child(1) {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}

.redLine span:nth-child(2) {
  font-size: 12px;
  color: rgb(102, 102, 102);
  margin-left: 20px;
}
</style>