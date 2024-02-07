<template>
  <h4>当前的x.y的值是：{{ x.y }}</h4>
  <button @click="x.y++">点我x加1</button>
  <hr>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>
  
  
  <script>
//   组合式api，就是通过导入这种形式编写
import { reactive, toRef, toRefs, shallowReactive, shallowRef, ref } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    // let person = shallowReactive({  只考虑第一层数据的响应式
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    let x = shallowRef({
      y: 0
    })

    return {
      person,
      ...toRefs(person),
      x
    };
  },
};
</script>
  
<style>
</style>
  