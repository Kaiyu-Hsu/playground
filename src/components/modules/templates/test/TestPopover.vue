<template>
  <div class="test-popover">
    <ElPopover>
      <template v-slot:content>
        <el-button type="text" @click="handleClick">
          <i class="el-icon-crop"></i>
          成功
        </el-button>
      </template>
    </ElPopover>
  </div>
</template>

<script>
import ElPopover from "../ElPopover.vue";

export default {
  components: {
    ElPopover,
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log("handleClick");
    },
  },
};
</script>