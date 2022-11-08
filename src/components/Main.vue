<template>
  <div class="main">
    <el-button type="text" v-tippy="tippyConfig()">
      <i class="el-icon-more"></i>
    </el-button>
    <h3>歡迎來到 Cindy 遊樂園</h3>
    <img
      src="https://img-eshop.cdn.nintendo.net/i/c69edb66ffed03152357cd24cacf10ff725c2a540bec59895e899b0d69b96b63.jpg?w=1000"
      alt="歡迎來到 Cindy 遊樂園"
    />
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
