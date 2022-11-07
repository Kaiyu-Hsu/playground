<template>
  <div class="main">
    <el-button type="text" v-tippy="tippyConfig()">
      <i class="el-icon-more"></i>
    </el-button>
  </div>
</template>

<script>
import "tippy.js/themes/light.css";

export default {
  name: "Main",
  props: {},
  data() {
    return {
      content: `<el-button type="primary"><i class="el-icon-crop"></i>數據集</el-button>`,
    };
  },
  methods: {
    tippyConfig() {
      let config = {
        content: this.content,
        allowHTML: true,
        theme: "light",
        arrow: false,
        placement: "bottom",
      };

      return config;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
