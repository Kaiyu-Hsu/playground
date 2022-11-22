<template>
  <!-- TODO  el-popover -->
  <div class="elpopover-wrapper">
    <el-popover placement="top" trigger="hover">
      <slot name="content"></slot>
      <el-button slot="reference" type="text">
        <i class="el-icon-more"></i>
      </el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>