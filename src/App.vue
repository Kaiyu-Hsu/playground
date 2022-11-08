<template>
  <div id="app">
    <el-container>
      <!-- :width="isCollapse ? '64px' : '200px'" -->
      <el-aside>
        <!-- :isCollapse="isCollapse" -->
        <TheNavigation />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TheNavigation from "../src/components/modules/organisms/TheLayout/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      // isCollapse: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .el-container,
  .el-aside {
    height: 100%;
  }

  .el-aside {
    overflow: hidden;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
