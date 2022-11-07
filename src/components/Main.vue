<template>
  <div class="main">
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="內容"
    >
      <el-button id="myButton" slot="reference">hover 激活</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {},
  data() {},
};
</script>

<style scoped lang="scss">
</style>
