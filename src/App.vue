<template>
  <div id="app">
    <baseHead></baseHead>
    <div class="container">
      <left></left>
      <center></center>
      <right></right>
    </div>
    <base-footer></base-footer>
    <playContrl v-show="$store.state.currSongInfo != null"></playContrl>
    <!-- <banner v-if="bannerUrls.length > 0" :imgUrls="bannerUrls"></banner> -->
  </div>
</template>

<script>
import baseHead from "./components/header.vue";
import baseFooter from "./components/footer.vue";
import left from "./components/left.vue";
import right from "./components/right.vue";
import center from "./components/center.vue";
import playContrl from "./components/control/playControl.vue";

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
    playContrl,
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

<style scoped>
@import url("../css/init.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 800px;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  border: 1px solid #d3d3d3;
  /* background-image: url(https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9567018575/92e5/fd7f/2b22/068f21135cbcbdad6a03e223a0a56fe2.jpg); */
}

.center {
  background-color: #fff;
}
</style>
