<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <!-- <h2>a的值是：{{ a }}</h2> -->
  <button @click="sayHello">说话(vue3所配置的-sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(vue2所配置的-sayWelcome)</button>
  <br>
  <br>
  <button @click="test1">测试一下在vue2配置中读取vue3的数据、方法</button>
  <button @click="test2">测试一下在vue3的setup配置中去读取vue2的数据、方法</button>
</template>

<script>
// import { h } from 'vue'
export default {
  name: 'App',
  data() {
    return {
      sex: '男'
    }
  },
  methods: {
    sayWelcome() {
      alert('欢迎来到尚硅谷学习')
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      this.sayHello();
    }
  },
  // 此处只是测试一下setup()函数，暂时不考虑响应式问题
  // setup前面不要写 async 
  setup() {
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello () {
      alert(`我叫${name}，我${age}岁了，你好啊！`)
    }

    // 在vue3中读取vue2的数据、方法
    function test2 () {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);
      console.log(this.sayWelcome);
    }

    // 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
    // 每写一个方法 都要通过return 返回过去 不然模版没办法用
    return {
      name,
      age,
      sayHello,
      test2
    }

    // 返回一个函数（渲染函数）
    // return () =>  h('h1', '尚硅谷')

  }
}
</script>

<style>

</style>
