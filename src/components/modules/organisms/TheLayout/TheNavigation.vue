<template>
  <div class="navigation">
    <!-- :collapse="isCollapse" -->
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      @open.native="handleOpen"
      @close.native="handleClose"
      @select.native="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">小工具</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"
            >el-tooltip + el-cascader-panel</el-menu-item
          >
          <el-menu-item index="1-2">element + vue-tippy</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    // isCollapse: Boolean,
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("handleOpen", key, keyPath);
      //   this.isCollapse = false;
    },
    handleClose(key, keyPath) {
      console.log("handleClose", key, keyPath);
      //   this.isCollapse = true;
    },
    handleSelect(key, keyPath) {
      console.log("handleSelect", key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>