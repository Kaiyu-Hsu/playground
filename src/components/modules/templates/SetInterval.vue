<template>
  <div class="setInterval">
    <el-button type="primary" plain @click="start">開始</el-button>
    <el-button type="primary" plain @click="end">結束</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null, // 初始定时器变量名为null
    };
  },
  methods: {
    start() {
      // 将定时器名字赋值到变量中
      this.timer = setInterval(() => {
        console.log("開始", this.timer);
      }, 1000);
    },
    end() {
      clearInterval(this.timer);
      //   this.timer = null; // 这里最好清除一下，回归默认值
      // 众所周知，定时器返回一个随机整数，用于表示定时器的编号，后面通过名字可以取消这个定时器的执行。
      console.log("timer", this.timer);
    },
    getConsole() {
      console.log("定时器");
    },
  },
  // 在离开这个页面的时候，（比如路由跳转到别的页面）必须要清除一下这个定时器，定时器不手动清除的话，会一直存在并执行
  // 直到我们的项目服务停掉，或者关机。所以适当时候清除定时器是非常有必要的。不然耗费性能，且容易造成代码混乱
  beforeDestroy() {
    // js提供的clearInterval方法用来清除定时器
    clearInterval(this.timer);
  },
  // beforeDestroy或destroyed钩子中都能去清除这个定时器
  // destroyed() {
  //   // clearInterval(this.timer);
  // },

  /*
    mounted钩子注册定时器要及时清除
       最初始情况，项目刚打开的时候，这个时候页面是必定没有定时器的，那么逻辑就会走else，这个时候就会注册一个定时器去循环调用相应逻辑代码
       后续有三种情况
          情况一：路由跳转，跳走了，就要清除这个定时器，所以在beforeDestroy钩子中要清除定时器
          情况二：关闭项目，关闭项目了以后，系统就会自动停掉定时器，这个不用管它
          情况三：刷新页面，这个时候vue组件的钩子是不会执行beforeDestroy和destroyed钩子的，所以
                 需要加上if判断一下，若还有定时器的话，就清除掉，所以这个就是mounted钩子的if判断的原因
    */
  //   mounted() {
  //     this.getConsole();

  //     if (this.timer) {
  //       clearInterval(this.timer);
  //     } else {
  //       this.timer = setInterval(this.getConsole, 1000);
  //     }
  //   },
};
</script>