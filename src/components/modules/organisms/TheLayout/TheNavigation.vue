<template>
  <div class="navigation">
    <!-- :collapse="isCollapse" -->
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      router
      @open.native="handleOpen"
      @close.native="handleClose"
      @select.native="handleSelect"
    >
      <el-menu-item index="/">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">Home</span>
        </template></el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">小工具</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/el-popover">el-popover</el-menu-item>
          <el-menu-item index="/vue-tipppy">element + vue-tippy</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">js練習</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/setInterval">定時器</el-menu-item>
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