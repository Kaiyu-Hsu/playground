<template>
  <div class="elpopover-wrapper">
    <el-popover placement="top-end" trigger="click">
      <slot name="content"></slot>
      <el-button slot="reference" type="text">
        <!-- <i></i> -->
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