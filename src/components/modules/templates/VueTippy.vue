<template>
  <!-- TODO  客製化 content -->
  <div class="vue-tipppy">
    <el-button type="text" v-tippy="tippyConfig()">
      <i class="el-icon-more"></i>
    </el-button>
  </div>
</template>
<script>
export default {
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