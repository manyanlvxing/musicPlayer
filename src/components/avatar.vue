<template>
  <p>i am avatar param props:{{ index }}</p>
</template>

<script>
export default {
  //响应路由参数变化的方法router 参数变化的方法
  watch: {
    $route(to, from) {
      console.log("route changed", to, from);
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");

    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  },
  props: ["index"],
};
</script>

<style scoped>
</style>