<template>
  <div class="navHeader">
    <ul>
      <li v-for="(val, index) in titles" :key="index">{{ val }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: ["发现音乐", "我的音乐", "朋友", "商城", "音乐人", "下载客户端"],
    };
  },
};
</script>

<style scoped>
.navHeader {
  height: 70px;
  background-color: #242424;
  border-bottom: 1px solid #000;
  padding-left: 350px;
}

.navHeader li {
  float: left;
  color: white;
  height: 70px;
  line-height: 70px;
  padding: 0 15px;
}

.navHeader li:hover{
    background-color: #000;
}
</style>