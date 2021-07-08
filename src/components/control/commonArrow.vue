<template>
  <div class="arrow" :class="direction" @click="onClick"></div>
</template>

<script>
export default {
  props: ["direction"],
  methods: {
    onClick() {
      this.$emit("onArrowClick", this.direction);
    },
  },
};
</script>

<style scoped>
.arrow {
  float: left;
  width: 17px;
  height: 17px;
  margin-top: 75px;
  background: url("../../assets/index.png") no-repeat;
}

.left {
  background-position: -260px -75px;
}

.right {
  background-position: -300px -75px;
}
</style>