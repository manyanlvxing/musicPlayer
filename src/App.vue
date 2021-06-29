<template>
  <div id="app">
    <baseHead></baseHead>
    <center></center>
    <left></left>
    <right></right>
    <base-footer></base-footer>
    <!-- <banner v-if="bannerUrls.length > 0" :imgUrls="bannerUrls"></banner> -->
  </div>
</template>

<script>
import baseHead from "./components/header.vue";
import baseFooter from "./components/footer.vue";
import left from "./components/left.vue";
import right from "./components/right.vue";
import center from "./components/center.vue";

export default {
  name: "App",
  data() {
    return {
      bannerUrls: [],
    };
  },
  components: {
    baseHead,
    baseFooter,
    left,
    right,
    center,
    // banner,
  },
  methods: {
    click1() {
      //1.直接push path,如果有path属性，则会忽略query
      // this.$router.push("/friend/2");

      //2.push数据对象{path:''}

      // this.$router.push({ path: "/friend/2" });

      //3.push数据对象,name+params

      // this.$router.push({
      //   name: "friend",
      //   params: {
      //     id: 10,
      //   },
      // });

      //4. push数据对象, path+query(有path出现params会被忽略掉)

      this.$router.push({
        path: "/friend/2",
        query: {
          name: "queryTest",
        },
      });
    },
    click2() {
      this.$router.push("/avatar/2");
    },
    click3() {
      this.$router.push("/avatar/3");
    },
  },

  created() {},
};
</script>

<style>
@import url("../css/init.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
