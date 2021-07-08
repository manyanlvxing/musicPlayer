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
  padding: 0 10px 0 34px;
  background-image: url("../assets/index.png");
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  background-repeat: no-repeat;
  margin: 20px 0 20px 20px;
  text-align: start;
  font-size: 20px;
}
</style>