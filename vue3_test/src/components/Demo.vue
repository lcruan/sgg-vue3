<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
</template>
  
  
  <script>
//   组合式api，就是通过导入这种形式编写
import { ref, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好啊");

    // 组合式api就是一堆内置的函数

    // 情况一：监视ref所定义的一个响应式数据
    /*   watch(
      sum,
      (newValue, oldValue) => {
        console.log("sum的值变化了", newValue, oldValue);
      },
      {
        immediate: true,
      }
    ); */

    // 情况二：监视ref所定义的多个响应式数据
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log("sum或msg的值变化了", newValue, oldValue);
      },
      {
        immediate: true,
      }
    );

    return {
      sum,
      msg,
    };
  },
};
</script>
  
<style>
</style>
  