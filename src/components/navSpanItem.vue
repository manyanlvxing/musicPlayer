<template>
  <li class="navItemLi" @click="clickNavItem">
    <a
      ><span class="em-class1" :class="hoverClass">{{ title }}</span></a
    >
  </li>
</template>

<script>
export default {
  props: ["title", "path"],
  methods: {
    clickNavItem() {
      if (this.path == "") return;
      console.log(this.$route);
      this.$router.push({
        path: this.path,
      });
    },
  },
  computed: {
    hoverClass() {
      return {
        "em-class1-hover": this.path == this.$route.path,
      };
    },
  },
};
</script>

<style scoped>
.em-class1 {
  padding: 5px 15px;
  height: 20px;
  color: white;
  line-height: 34px;
  font-size: 12px;
  height: 34px;
}

.em-class1-hover {
  background-color: rgb(155, 9, 9);
  border-radius: 10px;
}

.navItemLi {
  float: left;
  height: 34px;
}
</style>