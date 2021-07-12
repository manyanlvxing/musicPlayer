<template>
  <div class="more">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.more {
  width: 900px;
  padding: 40px;
  border: 1px solid rgb(211, 211, 211);
}
</style>