<template>
  <div class="example">
    <el-container>
      <!-- :width="isCollapse ? '64px' : '200px'" -->
      <el-aside>
        <!-- :isCollapse="isCollapse" -->
        <TheNavigation />
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import TheNavigation from "../components/modules/organisms/TheLayout/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      //   isCollapse: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.el-container,
.el-aside {
  height: 100%;
}

.el-aside {
  overflow: hidden;
}
</style>