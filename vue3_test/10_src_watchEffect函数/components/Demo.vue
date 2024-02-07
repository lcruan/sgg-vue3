<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>
  
  
  <script>
//   组合式api，就是通过导入这种形式编写
import { ref, watch, reactive, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 监视
    /*  watch(
      sum,
      (newValue, oldValue) => {
        console.log("sum的值变化了", oldValue, newValue);
      },
      {
        immediate: true,
      }
    ); */

    // 比较智能，自动检测里面用的哪个变量
    watchEffect(() => {
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect所指定的回调函数执行了');
    })

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
  
<style>
</style>
  