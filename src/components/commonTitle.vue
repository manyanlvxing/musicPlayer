<template>
  <div class="common-title">{{ title }}</div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.common-title {
  width: 645px;
  height: 33px;
  font-size: 20px;
  text-align: start;
  padding: 0 10px 0 34px;
  margin: 20px 0 20px 20px;
  background-repeat: no-repeat;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;
  background-image: url("../assets/index.png");
}
</style>